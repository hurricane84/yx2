const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/base.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://yanxuan.xiecheng.live:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
