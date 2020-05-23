const WebSocket =require('ws');
const events = require('events')
const code2ws = new Map()//维护了连接关系

const wss =new WebSocket.Server({
    port:8010
})
// console.log(wss instanceof events.EventEmitter);
wss.on('connection',function connection(ws,request){
    //ws 每一个用户
    console.log(ws);
    let code = Math.floor(Math.random()*(999999-100000))+100000;
    code2ws.set(code,ws);//ws就是用户

    ws.on('message',function incoming(message){
        //字符串 二进制流 
        // console.log('incoming',message);
        ws.sendData = (event,data) =>{
            ws.send(JSON.stringify({event,data}))
        }
        //A控制B
        //首先b要允许a控制它
        let parseMessage = {};//数据解构
        try{
        parseMessage =JSON.parse(message);//此时的风险：node的出错 单线程 crash pm2（出现问题自动重启）
        }catch(e){
            ws.sendError('message invalid')
            console.log('parse message error');
        }
        let {event,data}= parseMessage
        if(event === 'login'){
            ws.sendData('logined',{code})
        }else if(event === 'control'){
            let remote = data.remote//data包含remote值
            console.log(remote)
            if(code2ws.has(remote)){
                ws.sendData('controlled',{ remote })
                ws.sendRemote = code2ws.get(remote).sendData
                console.log(ws.sendRemote);
                ws.sendRemote('be-controlled',{
                    remote:code
                })
            }
        }
    })
})