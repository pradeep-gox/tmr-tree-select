const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: { 'tmr-tree-select': './src/index.js' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', // Regular version
    libraryTarget: 'umd',
    library: 'TMRTreeSelect',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
    new CopyPlugin([{ from: path.join(__dirname, 'types'), to: path.join(__dirname, 'dist') }]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              localIdentName: 'tmr-tree-select__[local]--[hash:base64:5]',
              importLoaders: 1,
              minimize: true,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false, // Disable default vendor chunking
        // Customize further if needed
      },
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js', // Minified version
    libraryTarget: 'umd',
    library: 'TMRTreeSelect',
    umdNamedDefine: true,
    globalObject: 'this',
  },
}
