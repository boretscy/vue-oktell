module.exports = {
  css: {
    extract: false,
    modules: true
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  publicPath: ''
}