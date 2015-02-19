var express = require('express')

module.exports = function (db, passport, loc_to_address) {
  var router = new express.Router()
  var Location = db.model('Location')
  var Address = db.model('Address')

  router.get('/', function(req, res) {
    res.send('hello world :*')
  })

  router.route('/location')
    .get(
      passport.authenticate('basic', { session: false }),
      function(req, res) {
        Location.find(function(err, location) {
          if (err) return res.status(400).send(err)
          res.json(location)
        })
      })
    .post(
      passport.authenticate('basic', { session: false }),
      function(req, res) {
        loc_to_address(db, req.body.latitude, req.body.longitude)
        var location = new Location(req.body)
        location.save(function(err) {
          if (err) return res.status(400).send(err)
          res.status(201).send({ message: 'Location added successfully ;)' })
        })
      })

  router.route('/location/last')
    .get(
      passport.authenticate('basic', { session: false }),
      function(req, res) {
        Location
          .find()
          .limit(1)
          .sort({$natural: -1})
          .exec(function(err, location) {
            if (err) return res.status(400).send(err)
            res.json(location)
          })
      })

  router.route('/address')
    .get(function(req, res) {
      Address.find(function(err, address) {
        if (err) return res.status(400).send(err)
        res.json(address)
      })
    })

  router.route('/address/last')
    .get(function(req, res) {
      Address
        .find()
        .limit(1)
        .sort({$natural: -1})
        .exec(function(err, address) {
          if (err) return res.status(400).send(err)
          res.json(address)
        })
    })

  return router
}
