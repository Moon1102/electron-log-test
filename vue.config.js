// vue.config.js

const path = require("path");
module.exports = {
  // where to output built files
  outputDir: "dist",

  // whether to use eslint-loader for lint on save.
  lintOnSave: false,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  transpileDependencies: [],

  // generate sourceMap for production build?
  productionSourceMap: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: (config) => {
    config.externals = {

    };

    config.resolve.alias = {
      "@public": path.resolve("public"),
      "@": path.resolve("src"),
      "@components": path.resolve("src/components"),
      "@utils": path.resolve("src/utils"),
      "@service": path.resolve("src/service"),
      "@view": path.resolve("src/view"),
    };

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
  },

  chainWebpack: (config) => {
  },

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      postcss: {
        // ..
        plugins: [
        ],
      },
    },

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false,
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    disableHostCheck: true,
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
  },

  // options for 3rd party plugins
  pluginOptions: {
    electronBuilder: {
      externals: ["level"],
      nodeIntegration: true,
      builderOptions: {
        productName: "test",
        appId: "com.test.product",
        copyright: "copyright",
      },
    },
  },
};
