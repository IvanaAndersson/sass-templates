const path = require("path");

module.exports = {
  mode: "development",
  entry: { siteCSS: ["./src/site.scss"] },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
