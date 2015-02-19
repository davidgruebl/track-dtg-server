var express = require('express')

module.exports = function (db, passport) {
  var router = express.Router()
  router.get('/', function (req, res) {
    res.send('hello world :*')
  })
  ;['location', 'address'].forEach(function (r) {
    router.use('/' + r, require('./' + r)(db, passport))
  })
  return router
}
