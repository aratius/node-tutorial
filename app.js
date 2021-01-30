const http = require('http')  //httpというnode.js組み込みのモジュール
const fs = require('fs')

let request;
let response;

//フロントJSでいう非同期関数的な感じかな
//req: クライアントからサーバーへのリクエスト情報が詰まってるオブジェクト
//res: サーバーからクライアントへの返信に関するオブジェクト
var server = http.createServer(getFromClient);
server.listen(3000)
console.log('Server started');

function getFromClient(req, res){
  request = req
  response = res
  fs.readFile('./index.html', 'UTF-8', writeToResponse)
  console.log('1');
}

function writeToResponse(err, data){
  response.writeHead(300, {'Content-type': 'text/html'})
  response.write(data)
  response.end()
  console.log('new client connected');
}