const {app,BrowserWindow,ipcMain} = require('electron');
/*ipcMain主进程  ipcRenderer渲染进程*/
let win


const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    webpPreferences:{
        nodeIntegration:true
    }
  })
  // file://
  win.loadURL(`file://${__dirname}/index.html`)
}

ipcMain.on('greet',(event,args)=>{
    console.log(args)
    event.sender.send('greet',{
        message:'hi renderer'
    })
})
app.on('ready', createWindow)