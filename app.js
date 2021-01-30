const http = require('http')  //httpというnode.js組み込みのモジュール
const fs = require('fs')
const ejs = require('ejs')

const index_page = fs.readFileSync('./index.ejs', 'utf8')

let request;
let response;

var server = http.createServer(getFromClient);
server.listen(3000)
console.log('Server started');

function getFromClient(req, res){
  const content = ejs.render(index_page)
  res.writeHead(200, {'Content-type': 'text/html'})
  res.write(content)
  res.end()
  console.log('New client connected');
}
