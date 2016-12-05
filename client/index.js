var express = require('express')
var addClient = require('./server')

var app = express()

addClient(app)

app.listen(8080, function () { console.log('listening') })
