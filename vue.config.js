// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path');
module.exports = {
  devServer: {
    port: 8000, //本机端口号
    host: "localhost", //本机主机名
    https: false,
    proxy: {
      '/rest': {
        target: 'http://127.0.0.1:3000',
        changOrigin: true,
        pathRewrite: {
            "^/rest": '', // 将前缀 /rest 转为/
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
}
