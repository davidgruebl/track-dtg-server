module.exports = function(db, passport) {
  var exp = {}
  ;['api'].forEach(function (r) {
    exp[r] = require('./' + r)(db, passport)
  })
  return exp
}
