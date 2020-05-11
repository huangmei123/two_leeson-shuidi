var http = require('http')

http.createServer(function(req,res){
    //一份代码满足后端常见的两种需求 
    //axios proxy（跨域）  /api /post  前后端分离模式 mvvm模式 text/json
    //传统的后端驱动型开发  前端切页面 后端数据库的套页面 mvc后端驱动模式 text/html

    let posts = [{
        id: '5e8c94a7f265da47a74126d4',
        title: '怎么排查堆内存溢出呀？'
      }, {
        id: '5eb7ebea5188256d723151fb',
        title: '给前端工程师的一张Dart语言入场券'
      }]
    if(req.url === './posts'){ //url 请求行
        if(req.headers['content-type'] === 'text/json'){//头部信息
            res.end(JSON.stringify(posts))
        }else{

        }
    }
    res.end('hello world');
}).listen(1314);