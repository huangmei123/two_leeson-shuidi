let {app,BrowserWindow} =require('electron')
let win
app.on('ready',()=>{
    win = new BrowserWindow({
        width:600,//指定窗口的宽高
        height:300,
        webPreferences:{
            nodeIntegration:true //支持node调试
        }
    }) //chromium就启动了 桌面的代表就是窗口
    win.loadURL("http://localhost:3000")
})