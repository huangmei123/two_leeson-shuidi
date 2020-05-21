let {app,BrowserWindow} =require('electron')
let win
app.on('ready',()=>{
    win = new BrowserWindow() //chromium就启动了 桌面的代表就是窗口
    win.loadFile("index.html")
})