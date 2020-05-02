# KOA2

## async和await
async 是异步的简写，它是声明一个方法是异步的。
await是async await的简写。是等待异步方法完成。await必须在async方法中才能使用（await访问本身会造成程序停止阻塞）
- async 
让方法变成异步的，return的是async函数的值（返回的是Promise）
- await都是在async方法执行完毕。等待的是一个表达式（Promise对象）

## Get请求的接收  demo02
1. Get通过request接收，
query：返回格式化好的参数对象
querystring：返回的是请求字符串
"url":"/","req_query":{},"req_querystring":""}
2. 直接在ctx获取

## POST请求的接收
通过上下文context中的原生node.js请求对象req来获取
获取Post请求的步骤：
  - 解析上下文ctx中的原生nodex.js对象req。
  - 将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
  - 将字符串转换成JSON格式。
ctx.request和ctx.req的区别
第一个是Koa2中context经过封装的请求对象，用起来更直观和简单，第二个是context提供的node.js原生HTTP请求对象，可以获得更多的内容，适合深度编程。
ctx.method得到请求类型，根据类型编写不同的相应的方法。
解析Node原生POST参数
  声明一个方法，然后用Promise对象进行解析。使用ctx.req.on来接收事件。
POST字符串解析JSON对象

