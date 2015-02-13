var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LocationSchema = new Schema({
  latitude: Number,
  longitude: Number,
  accuracy: Number,
  altitude: Number,
  heading: Number,
  speed: Number,
  altitudeAccuracy: Number,
  timestamp: Date
})

module.exports = mongoose.model('Location', LocationSchema)
