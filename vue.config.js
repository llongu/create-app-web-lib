const path = require("path")

const resolve = (src) => {
  return path.resolve(src)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("./src"))
    config.plugin("html").tap((args) => {
      args[0].title = "my-app"
      return args
    })
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/assets/css/*.scss")]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/common.scss";`
      }
    }
  }
}
