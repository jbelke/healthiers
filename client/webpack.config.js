const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { ProvidePlugin } = require('webpack')

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
          babelrc: false
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
    new ProvidePlugin({
      'React': 'react',
    }),
    new HtmlPlugin({ template: 'src/index.html' }),
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    colors: false
  }
}
