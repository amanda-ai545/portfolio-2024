// scripts/generateSitemap.js

import SitemapGenerator from 'sitemap-generator';

// Set the URL of your deployed Vercel application
const targetUrl = 'https://amanda-diane-evallo.vercel.app/';

// Output path for the sitemap file
const outputPath = './public/sitemap.xml';

// Create a new SitemapGenerator
const generator = SitemapGenerator(targetUrl, {
  stripQuerystring: false, // Set to true if you want to ignore query strings
  filepath: outputPath,
});

// Register event listeners
generator.on('done', () => {
  console.log(`Sitemap generated at: ${outputPath}`);
});

generator.on('error', (error) => {
  console.error(`Error generating sitemap: ${error}`);
});

// Start the generator
generator.start();
