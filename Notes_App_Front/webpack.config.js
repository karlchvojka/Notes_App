const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "/"),
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 15000 } },
      },
    ],
  },

  resolve: {
    alias: {
      globals: path.resolve(__dirname, './src/components/globals'),
      src: path.resolve(__dirname, './src'),
      helpers: path.resolve(__dirname, './src/helpers'),
    },
    extensions: ["*", ".js", ".jsx", '.scss', '.css'],
  },
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
