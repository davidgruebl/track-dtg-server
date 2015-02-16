var mongoose = require('mongoose')

module.exports = function (db) {
  var LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    accuracy: Number,
    altitude: Number,
    heading: Number,
    speed: Number,
    altitudeAccuracy: Number,
    timestamp: Date
  })
  db.model('Location', LocationSchema)
}
