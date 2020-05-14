var http = require('http')

http.createServer((req,res)=>{
    /*三次握手
    seq  x
    ack      ack=x+1
             seq=y
    ack=y+1
    */
   if(req.url =='/new_page_not_go'){
       res.writeHead(204);
       return
   }
   req.writeHead(200,{'Content-Type':'text/html;charset-utf-8'})
   res.write("hello world");
   res.end(`
   <html>
     <head></head>
     <body>
       <a href="
   `)
})