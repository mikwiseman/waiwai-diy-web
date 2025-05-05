export default {
  hostname: 'https://waiwai.diy',
  gzip: true,
  exclude: [
    '/404',
    '/en/**'
  ],
  defaults: {
    changefreq: 'daily',
    priority: 0.8,
    lastmod: new Date()
  },
  routes: [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  ]
} 