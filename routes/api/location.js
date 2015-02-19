var express = require('express')

module.exports = function (db, passport) {
  var router = new express.Router()
  var Location = db.model('Location')
  var Address = db.model('Address')
  var locationToAddress = require('../../lib/address')(db)

  router.route('/')
    .get(
      passport.authenticate('basic', { session: false }),
      function (req, res) {
        Location.find(function(err, location) {
          if (err) return res.status(400).send(err)
          res.json(location)
        })
      })
    .post(
      passport.authenticate('basic', { session: false }),
      function (req, res) {
        locationToAddress(req.body.latitude, req.body.longitude)
        var location = new Location(req.body)
        location.save(function(err) {
          if (err) return res.status(400).send(err)
          res.status(201).send({ message: 'Location added successfully ;)' })
        })
      })

  router.get('/last',
    passport.authenticate('basic', { session: false }),
    function (req, res) {
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
