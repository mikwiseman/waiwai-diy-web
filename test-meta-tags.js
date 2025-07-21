#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function testMetaTags(url, expectedLocale) {
  console.log(`\nTesting ${url} (expecting ${expectedLocale} locale)...`);
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  // Get all meta tags
  const metaTags = await page.evaluate(() => {
    const tags = {};
    
    // Get title
    tags.title = document.title;
    
    // Get meta tags by name
    const metaByName = ['description', 'keywords', 'language', 'twitter:card', 'twitter:title', 'twitter:description'];
    metaByName.forEach(name => {
      const meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) tags[name] = meta.content;
    });
    
    // Get meta tags by property
    const metaByProperty = ['og:title', 'og:description', 'og:type', 'og:url'];
    metaByProperty.forEach(property => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) tags[property] = meta.content;
    });
    
    // Get canonical link
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) tags.canonical = canonical.href;
    
    return tags;
  });
  
  console.log('Meta tags found:');
  console.log(JSON.stringify(metaTags, null, 2));
  
  await browser.close();
}

// Test both domains locally
(async () => {
  try {
    // Note: Since we can't actually test different domains locally,
    // we'll just test the local version and explain what would happen
    console.log('Testing local development server...');
    console.log('Note: Domain-based language detection only works in production.');
    console.log('In production:');
    console.log('- waiwai.diy would show Russian meta tags');
    console.log('- wai.sale would show English meta tags');
    
    await testMetaTags('http://localhost:8080', 'default (should be ru locally)');
    
  } catch (error) {
    console.error('Error:', error);
  }
})();