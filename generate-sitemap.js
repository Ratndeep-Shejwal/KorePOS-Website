import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

async function generateSitemap() {
  // Pulls from Vercel's production URL or defaults to your live domain
  const hostname = process.env.VITE_SITE_URL || 'https://www.korepos.co.uk';

  const smStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

  smStream.pipe(writeStream);

  // 1. Static Pages
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/business-types', changefreq: 'weekly', priority: 0.9 },
    { url: '/korepos-lite', changefreq: 'monthly', priority: 0.8 },
    { url: '/korepos-pro', changefreq: 'monthly', priority: 0.8 },
  ];

  staticPages.forEach((page) => smStream.write(page));

  // 2. Dynamic Business Types
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
          smStream.write({
            url: `/business-types/${slug}`,
            changefreq: 'weekly',
            priority: 0.7,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error fetching dynamic business types for sitemap:', error);
  }

  smStream.end();
  await streamToPromise(smStream);
  console.log(`✅ Sitemap successfully generated for ${hostname}`);
}

generateSitemap();