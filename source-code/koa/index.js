const Koa = require('./lib/application');
let app = new Koa();

app.use((req,res)=>{  //ctx 对象的构建
    // res.end('hello world')
    // ctx-> ctx.body ->request->req
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.response.req.url);
    console.log(ctx.request.url);
    console.log(ctx,request.path);
    console.log(ctx.url);
    console.log(ctx.path);
    ctx.body = 'hello world';

})
app.listen(3000)