module.exports = function(db, passport, loc_to_address) {
  var exp = {}
  ;['location'].forEach(function (r) {
    exp[r] = require('./' + r)(db, passport, loc_to_address)
  })
  return exp
}
