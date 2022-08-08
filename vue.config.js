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
  }
})
