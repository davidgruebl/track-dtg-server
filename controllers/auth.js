var passport = require('passport')
var BasicStrategy = require('passport-http').BasicStrategy
var User = require('../models/user')

var Basic = new BasicStrategy(
  { qop: 'auth' },
  function(username, password, done) {
    process.nextTick(function () {
      User.findOne({ username: username }, function (err, user) {
        if (err) return done(err)
        if (!user) return done(null, false)
        if (user.password !== password) return done(null, false)
        return done(null, user)
      })
     })
  })

module.exports = passport.use('basic', Basic)
