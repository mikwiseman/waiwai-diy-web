const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]
  },
  pwa: {
    iconPaths: {
      favicon32: 'public/favicon-32x32.png',
      favicon16: 'public/favicon-16x16.png',
      appleTouchIcon: 'public/apple-touch-icon.png',
      maskIcon: 'public/android-chrome-192x192.png',
      msTileImage: 'public/android-chrome-512x512.png'
    }
  }
}) 