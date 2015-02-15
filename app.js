var express = require('express')
var passport = require('passport')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var locations = require('./routes/location')
var app = express()
app.set('trust proxy', true)

var dbName = 'locationsDB'
var connectionString = 'mongodb://localhost:27017/' + dbName

mongoose.connect(connectionString, function(err) {
  if (err) throw err
})

app.use(bodyParser.json())
app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', locations)

app.get('/', function(req, res) {
  res.redirect('https://dtg.sexy')
})

module.exports = app
