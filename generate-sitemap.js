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

  // 2. Fetch dynamic business types safely
  try {
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
    }
  } catch (error) {
    console.warn('⚠️ Warning: Could not fetch API during build. Sitemap generated with static pages only.');
  }

  // 3. Construct XML manually or via a clean template loop (zero stream dependencies)
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

  // 4. Write directly using fs
  writeFileSync(resolve('./public/sitemap.xml'), xmlContent);
  console.log(`✅ Sitemap successfully generated at ./public/sitemap.xml for ${hostname}`);
}

generateSitemap();