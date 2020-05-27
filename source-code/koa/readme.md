# koa 源码
1. Object.creat 在koa源码中
 与es6高级能力跟源码分析结合

## koa源码中怎么造ctx这个对象？
koa/index.js搭建架构思想
application.js负责类的提供
context.js负责上下文
request.js请求对象 用户端
response.js 架构完成
* 设计哲学：大道至简 ，k围绕着核心问题进行，其他的东西可以通过第三方的中间件（路由、bodyparse，登录的中间件）

1. 完成了架构的搭建（application.js）， 设计代码的能力
```js
let http = require('http');
let EventEmitter = require('events');

class Koa extends EventEmitter{
  constructor(){
      super()
  }
  use(){

  }
  listen(){
      
  }
}
```
2. application context.js上下文对象 request.js请求对象
思路： use多个中间件 cts之间的属性（ctx.body)
