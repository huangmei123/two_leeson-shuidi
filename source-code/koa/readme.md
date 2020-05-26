# koa 源码
1. Object.creat 在koa源码中 与es6高级能力跟源码分析结合

- 完成了架构的搭建 设计代码的能力
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
- application context.js上下文对象 request.js请求对象
思路： use多个中间件 cts之间的属性（ctx.body)
