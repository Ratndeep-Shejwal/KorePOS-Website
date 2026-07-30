import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function generateSitemap() {
  const hostname = process.env.VITE_SITE_URL || 'https://www.korepos.co.uk';

  // 1. Static Pages
  const urls = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/business-types', changefreq: 'weekly', priority: 0.9 },
    { url: '/korepos-lite', changefreq: 'monthly', priority: 0.8 },
    { url: '/korepos-pro', changefreq: 'monthly', priority: 0.8 },
  ];

  // 2. Fetch dynamic business types and wait for them to complete
  try {
    console.log('Fetching dynamic business types for sitemap...');
    const response = await fetch('https://pos.getsmotives.com/admin/api/business-types');
    const data = await response.json();
    const apiData = Array.isArray(data) ? data : data.cards || data.business_types || data.data;

    if (apiData && apiData.length > 0) {
      apiData.forEach((item) => {
        const name = item.name || item.title || '';
        const rawSlug = item.slug || name;
        const slug = String(rawSlug)
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');

        if (slug) {
          urls.push({
            url: `/business-types/${slug}`,
            changefreq: 'weekly',
            priority: 0.7,
          });
        }
      });
      console.log(`Successfully added ${apiData.length} dynamic business types to sitemap.`);
    }
  } catch (error) {
    console.warn('⚠️ Warning: Could not fetch API during build:', error);
  }

  // 3. Construct XML string
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${hostname}${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // 4. Write to public folder
  writeFileSync(resolve('./public/sitemap.xml'), xmlContent);
  console.log(`✅ Sitemap successfully generated with ${urls.length} total URLs at ./public/sitemap.xml`);
}

// Ensure the async function is explicitly executed and awaited
generateSitemap().catch((err) => {
  console.error('Fatal error generating sitemap:', err);
  process.exit(1);
});