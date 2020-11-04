/* eslint-disable */

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/_variables.scss')
      ]
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      }),
    ],
  },
  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', 'App Ts')
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      importWorkboxFrom: 'local',
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    // host: 'web-template.ts',
    // port: 8888,
    https: true,
    open: true
  }
}
