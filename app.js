const http = require('http')  //httpというnode.js組み込みのモジュール

var server = http.createServer((req, res) => {
  res.end('Hello Node.js')
});
server.listen(3000)