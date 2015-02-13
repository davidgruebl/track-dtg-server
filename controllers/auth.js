var passport = require('passport')
var DigestStrategy = require('passport-http').DigestStrategy
var User = require('../models/user')

var Digest = new DigestStrategy(
  { qop: 'auth' },
  function(username, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) return done(err)
      if (!user) return done(null, false)
      return done(null, user, user.password)
    })
  },
  function(params, done) {
    done(null, true)
  })

module.exports = passport.use('digest', Digest)