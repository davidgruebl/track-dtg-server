module.exports = function(db) {
  ['user', 'location', 'address'].forEach(function (m) {
    require('./' + m)(db)
  })
}
