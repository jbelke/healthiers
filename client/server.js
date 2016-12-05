var webpackMiddleware = require('webpack-dev-middleware')
var webpack = require('webpack')
var config = require('./webpack.config')

var compiler = webpack(config)

function addClient(app) {
  app.use('/', webpackMiddleware(compiler, { }))
  return app
}

module.exports = addClient
module.exports.default = addClient
