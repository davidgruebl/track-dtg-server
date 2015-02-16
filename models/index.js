module.exports = function(db) {
  ['user', 'location'].forEach(function (m) {
    require('./' + m)(db)
  })
}
