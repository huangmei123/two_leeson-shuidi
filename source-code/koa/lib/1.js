
//最精简的koa源码
const Koa= require('koa') //class
const app = new Koa(); //实例化

app.use((ctx,next)=>{   //ctx上下文   next
    ctx.body = 'hello,body'; //传递的就是一个函数
})
app.listen(3000)  //createServer callback