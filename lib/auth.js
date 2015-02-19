var BasicStrategy = require('passport-http').BasicStrategy

module.exports = function (db, passport) {
  var User = db.model('User')
  passport.use(new BasicStrategy({
      qop: 'auth'
    }, function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) return done(err)
        if (!user) return done(null, false)
        if (user.password !== password) return done(null, false)
        return done(null, user)
      })
    })
  )
}
