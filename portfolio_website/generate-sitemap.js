// generate-sitemap.js

const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { resolve } = require('path');

const baseUrl = 'https://kolekikuta.dev'; // <-- change to your actual domain

const pages = [
  '/',
  '/about',
  '/projects',
  '/leasemate',
  '/nbafantasy'
  // Add more routes manually if needed
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  pages.forEach(page => {
    sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync(resolve(__dirname, 'public', 'sitemap.xml'), sitemapData.toString());

  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
