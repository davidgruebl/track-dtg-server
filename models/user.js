var mongoose = require('mongoose')

module.exports = function (db) {
  var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  })
  db.model('User', UserSchema)
}
