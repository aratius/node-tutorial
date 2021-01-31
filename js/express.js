const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello ARATA')
})

app.listen(8000, function() {
  console.log('example app listening on port 8000');
})