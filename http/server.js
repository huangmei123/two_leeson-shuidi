const http =require('http')
const fs = require('fs')

http.createServer(function (request,response){
  console.log('request come', request.url)
//读取内容 utf8格式
  // const html = fs.readFileSync('test.html','utf8')
  // response.writeHead(200,{
  //     'Content-Type':'text/html' //自动识别内容 如果是text/plain那么输出源码
  // })
  // response.end(html)

  if(request.url ==='/'){
    const html = fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
        'Content-Type':'text/html' //自动识别内容 如果是text/plain那么输出源码
    })
    response.end(html)
  }
  if(request.url ==='./script.js'){
    response.writeHead(200,{
      'Content-Type':'text/javascipt' ,
      'Cache-Control':'max-age=20'
  })
  response.end('console.log("script loaded")')
  }
}).listen(8888)

console.log('server lisening on 8888')