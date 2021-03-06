const express = require('express')
const app = express()

//middleware functionの例
const a_middleware_function = function(req, res, next) {
  console.log('called middleware');
  next()
}

app.use(a_middleware_function)

app.get('/', function(req, res) {
  res.send('Hello ARATA')
})

app.listen(8000, function() {
  console.log('example app listening on port 8000');
})