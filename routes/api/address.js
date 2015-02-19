var express = require('express')

module.exports = function (db, passport) {
  var router = new express.Router()
  var Address = db.model('Address')

  router.get('/', function (req, res) {
    Address.find(function (err, address) {
      if (err) return res.status(400).send(err)
      res.json(address)
    })
  })

  router.get('/last', function (req, res) {
    Address
      .find()
      .limit(1)
      .sort({$natural: -1})
      .exec(function (err, address) {
        if (err) return res.status(400).send(err)
        res.json(address)
      })
  })

  return router
}
