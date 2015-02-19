var bodyParser = require('body-parser')
var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var passport = require('passport')

var dbName = 'locationsDB'
var db = mongoose.createConnection('mongodb://localhost:27017/' + dbName)

require('./models')(db)
require('./lib/auth')(db, passport)

var routes = require('./routes')(db, passport)

var app = express()
app.enable('trust proxy')

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', routes.api)

app.all('/', function(req, res) {
  res.redirect('https://dtg.sexy')
})

module.exports = app
