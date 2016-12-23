const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy'],
          babelrc: false
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
        )
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|gif|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlPlugin({ template: 'src/index.html' }),
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    colors: false
  }
}
