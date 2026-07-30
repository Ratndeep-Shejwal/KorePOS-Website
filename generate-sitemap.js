import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

async function generateSitemap() {
  const hostname = process.env.VITE_SITE_URL || 'https://www.korepos.co.uk';

  const smStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

  smStream.pipe(writeStream);

  // 1. Always write static pages first so the stream is never empty
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/business-types', changefreq: 'weekly', priority: 0.9 },
    { url: '/korepos-lite', changefreq: 'monthly', priority: 0.8 },
    { url: '/korepos-pro', changefreq: 'monthly', priority: 0.8 },
  ];

  staticPages.forEach((page) => smStream.write(page));

  // 2. Fetch and write dynamic business types safely
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
    console.warn('⚠️ Warning: Could not fetch API during build. Sitemap generated with static pages only.');
  }

  // 3. End the stream properly after everything is written
  smStream.end();
  await streamToPromise(smStream);
  console.log(`✅ Sitemap successfully generated for ${hostname}`);
}

generateSitemap();