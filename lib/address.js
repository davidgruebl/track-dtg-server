var geocoder = require('node-geocoder').getGeocoder('google', 'http')

module.exports = function (db, lat, long) {
  var Address = db.model('Address')
  geocoder.reverse(lat, long)
    .then(function(res) {
      var address = new Address(res[0])
      address.save(function(err) {
        if (err) console.log(err)
      })
    })
    .catch(function(err) {
      console.log(err)
    })
}
