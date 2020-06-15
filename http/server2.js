const http =require('http')

http.createServer(function(request,response){
  console.log('request come',request.url)
//不管有没有这个头，都会发送请求
  response.writeHead(200,{
     ' Access-Control-Allow-Origin':'*',
     ' Access-Control-Allow-Headers':'X-Test-Cors', //预请求
     ' Access-Control-Allow-Methods':'POST,PUT,Delete',
     ' Access-Control-Max-Age':'1000',
  })
  response.end('123')

}).listen(8887)

console.log('server listening on 8887')