// Helper to format any string into a clean URL slug
export const createSlug = (str) =>
  String(str || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Fetch all business types from the API with fallback
export async function fetchBusinessTypes() {
  try {
    const res = await fetch("https://pos.getsmotives.com/admin/api/business-types");
    const data = await res.json();
    const apiItems = Array.isArray(data) ? data : data.cards || data.business_types || data.data;

    if (apiItems && apiItems.length > 0) {
      return apiItems.map((item) => {
        const name = item.name || item.title || "Business";
        const rawSlug = item.slug || name;
        return {
          name: name,
          description: item.description || item.short_description || "Specialized workflow tools built for this business type.",
          image: item.image || item.image_url || "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
          slug: createSlug(rawSlug),
        };
      });
    }
  } catch (err) {
    console.error("Failed to fetch live business types from API:", err);
  }
  return null; // Signals to use local fallback if API fails
}