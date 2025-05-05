export default {
  hostname: 'https://waiwai.diy',
  gzip: true,
  exclude: [
    '/404',
    '/admin/**'
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
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date()
    }
  ]
} 