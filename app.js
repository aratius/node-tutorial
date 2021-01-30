const http = require('http')  //httpというnode.js組み込みのモジュール

//フロントJSでいう非同期関数的な感じかな
var server = http.createServer((req, res) => {
  res.end('Hello Node.js')
});
server.listen(3000)