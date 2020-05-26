//koa 类的提供  koa的源码比较短 好读
let http = require('http');
let EventEmitter = require('events');
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter{
  constructor(){
      super()
      this.fn =undefined;
      this.context =this.context;
      this.request = request;
      this.response = response;

  }
  use(fn){  //先支持一个函数的callback
//异步无阻塞
    this.fn =fn;
  }
  createContext(req,res){
      const ctx = Object.create(this.context);//继承源对象 ctx在增加属性时不影响原对象
    //   ctx.body= 'dfdfdf';
    const request = ctx.request =Object.create(this.request);
    const response = ctx.response =Object.create(this.response);
    ctx.req = request.req = response.req =req;
    ctx.res = request.res = response.res = res;
    request.response = response;
    response.request = request;
    return ctx;

  }
  handleRequest(req,res){
      let ctx = this.createContext(req,res);
      this.fn(ctx);//调用用户给的回调 把ctx给用户用
      res.end(ctx.body)
  }
  listen(...args){ 
    //args port callback
    //交给中间件处理函数 req res 加工成 ctx内部调用
    let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...args) 
  }
}

module.exports =Koa