const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: {
    runtime: 'regenerator-runtime/runtime.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/images/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
}
