const Koa = require('./lib/application');
let app = new Koa();

app.use((req,res)=>{  //ctx 对象的构建
    // res.end('hello world')
    ctx.body = 'hello world';
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.request.url,'++++++');
})
app.listen(3000)