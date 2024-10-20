const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://www.cloud9calm.com', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
  maxEntriesPerFile: 50000,
  lastMod: true,
  changeFreq: 'weekly',
  priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0.0]
});

// registers event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// starts the crawler
generator.start();