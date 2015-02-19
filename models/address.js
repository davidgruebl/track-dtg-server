var mongoose = require('mongoose')

module.exports = function (db) {
  var AddressSchema = new mongoose.Schema({
    country: String,
    city: String,
    state: String,
    stateCode: String,
    zipcode: String,
    countryCode: String
  })
  db.model('Address', AddressSchema)
}
