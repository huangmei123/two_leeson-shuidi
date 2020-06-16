const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html')
  response.writeHead(200, {
    'Content-Type': 'text/html', //数据格式
    // 'X-Content-Options': 'nosniff'
    'Content-Encoding': 'gzip'  //压缩方式
  })
  response.end(zlib.gzipSync(html)) 
}).listen(8888)

console.log('server listening on 8888')