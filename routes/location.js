var Location = require('../models/location')
var passport = require('passport')
var express = require('express')
var router = express.Router()
var basic = require('../controllers/auth')

router.route('/location')
  .get(function(req, res) {
    Location.find(function(err, location) {
      if (err) return res.send(err)
      res.json(location)
    })
  })
  .post(
    passport.authenticate('basic', { session: false }),
    function(req, res) {
    var location = new Location(req.body)
    location.save(function(err) {
      if (err) return res.send(err)
      res.send({ message: 'Location added successfully ;)' })
    })
  })

router.route('/location/last')
  .get(function(req, res) {
    Location
      .find()
      .limit(1)
      .sort({$natural: -1})
      .exec(function(err, location) {
        if (err) return res.send(err)
        res.json(location)
      })
  })

module.exports = router
