const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV;

module.exports = {
  entry: `${__dirname}/src/3d.tsx`,
  output: {
    filename: "interface.js",
    path: __dirname
  },

  externals: {
    "@webu/graphics": "WebUGraphics",
    "@webu/module": "Module",
    "@webu/utils": "WebUUtils",
    "@webu/utils/ajax": "WebUUtils.ajax",
    "@webu/utils/dom": "WebUUtils.dom",
    "@webu/utils/events": "WebUUtils.events",
    "@webu/utils/misc": "WebUUtils.misc",
    "@webu/utils/mobile": "WebUUtils.mobile",
    "@webu/utils/selectors": "WebUUtils.selectors",
    "prop-types": "PropTypes",
    "liqvid": "Liqvid",
    "react": "React",
    "react-dom": "ReactDOM",
    "three": "THREE"
  },

  mode,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "ts-loader",
      }
    ],
  },

  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@lib": "/home/yuri/webu-content/shared/lib",
      "@libenv": `/home/yuri/webu-content/shared/@${mode}`,
      "@libr": "/home/yuri/webu-content/shared/libr",
      "@loaders": "/home/yuri/webu-content/shared/loaders",
    }
  }
};
