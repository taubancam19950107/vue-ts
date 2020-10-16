/* eslint-disable */

const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  pluginOptions: {

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
    https: true
  }
}
