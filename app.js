const http = require('http')  //httpというnode.js組み込みのモジュール

//フロントJSでいう非同期関数的な感じかな
//req: クライアントからサーバーへのリクエスト情報が詰まってるオブジェクト
//res: サーバーからクライアントへの返信に関するオブジェクト
var server = http.createServer((req, res) => {
  res.end('<html><body><h1>hello</h1><p>welcome to my site</p></body></html>')
});
server.listen(3000)