var app = require('../app')

app.set('port', process.env.PORT || 8000)

var server = app.listen(app.get('port'), function() {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
