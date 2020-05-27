//koa 类的提供  koa的源码比较短 好读
let http = require('http');
let EventEmitter = require('events');
let context = require('./context')//引入模块context
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter{
  constructor(){
      super()
      this.fn =undefined; //fn是callback 是未来的中间件 未来是middeware
      this.context =this.context; 
      this.request = request;
      this.response = response;

  }
  use(fn){  //先支持一个函数的callback
//异步无阻塞
    this.fn =fn;
  }
  createContext(req,res){//创建ctx
      const ctx = Object.create(this.context);//继承原对象 Object.create的好处：ctx在增加属性时不影响原对象
    //   ctx.body= 'dfdfdf';
    const request = ctx.request =Object.create(this.request);
    const response = ctx.response =Object.create(this.response);
    ctx.req = request.req = response.req =req;//引用式赋值 可以让各个用户引用对象
    ctx.res = request.res = response.res = res;
    request.response = response;
    response.request = request;
    return ctx;

  }
  handleRequest(req,res){
      let ctx = this.createContext(req,res);
      this.fn(ctx);//调用用户给的回调 把ctx给用户用
      res.end(ctx.body) //ctx.body=‘hello world’返回给用户
  }
  listen(...args){ 
    //args port callback
    //this.fn接受的是 （req，res） =》{ }
    //交给中间处理函数 req res 加工成 ctx内部调用
    let server = http.createServer(this.handleRequest.bind(this));//用户进来 执行这个
        server.listen(...args) 
  }
}

module.exports =Koa