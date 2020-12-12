const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: process.env.outputDir,
  lintOnSave: true,
  publicPath: process.env.NODE_ENV=='development'?"./":"/",
  productionSourceMap: process.env.VUE_APP_MODE == "test" ? true : false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true); //热重载;
    if (process.env.use_analyzer) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    //test和build开启optimization
    if (process.env.NODE_ENV == "test" || process.env.NODE_ENV == "production") {    
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            priority: 10,
          },
          common: {
            name: "common",
            chunks: "initial",
            priority: 1,
            minChunks:3
          },
        },
      });
    }
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@r", resolve("src/router"))
      .set("@v", resolve("src/views"))
      .set("@u", resolve("src/utils"))
      .set("@c", resolve("src/components"))
      .set("@com", resolve("src/common"))
      .set("@s", resolve("src/store"))
      .set("@a", resolve("src/assets"));
  },
  assetsDir:"",
  css: {
    extract: true,
    sourceMap:false
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined,
    // externals: {
    //   "vue": "Vue",
    //   "vue-router": "VueRouter",
    //   "axios": "axios",
    //   "element-ui": "ELEMENT",
    //   "vuex": "Vuex",
    // },
  },
  devServer: {
    open: true,
    inline: true,
    proxy: {
      "/api": {
        target: "http://localhost:9090",
        changeOrigin: true,
        secure: true,
        pathRewrite:{ 
          "^/api":""
        }
        // port: 9000,
      },
    },
  },
};
