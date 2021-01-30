const http = require('http')  //httpというnode.js組み込みのモジュール
const fs = require('fs')

//フロントJSでいう非同期関数的な感じかな
//req: クライアントからサーバーへのリクエスト情報が詰まってるオブジェクト
//res: サーバーからクライアントへの返信に関するオブジェクト
var server = http.createServer((req, res) => {
fs.readFile('./index.html', 'UTF-8', (err, data) => {
  res.writeHead(300, {'Content-type': 'text/html'})
  res.write(data)
  res.end()
})
});
server.listen(3000)
console.log('Server started');