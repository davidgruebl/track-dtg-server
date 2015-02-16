var express = require('express')

module.exports = function (db, passport) {
  var router = new express.Router()
  var Location = db.model('Location')

  router.get('/', function(req, res) {
    res.send('hello world :*')
  })

  router.route('/location')
    .get(function(req, res) {
      Location.find(function(err, location) {
        if (err) return res.status(400).send(err)
        res.json(location)
      })
    })
    .post(
      passport.authenticate('basic', { session: false }),
      function(req, res) {
      var location = new Location(req.body)
      location.save(function(err) {
        if (err) return res.status(400).send(err)
        res.status(201).send({ message: 'Location added successfully ;)' })
      })
    })

  router.route('/location/last')
    .get(function(req, res) {
      Location
        .find()
        .limit(1)
        .sort({$natural: -1})
        .exec(function(err, location) {
          if (err) return res.status(400).send(err)
          res.json(location)
        })
    })

  return router
}
