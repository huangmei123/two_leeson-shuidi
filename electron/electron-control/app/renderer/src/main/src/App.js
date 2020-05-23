import React,{userEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//electron不支持import 
// create-react-app既好用又不好用 0配置启动
//ipc 进程间的通信 多进程架构 
//ipcRenderer可以完成进程间的通信
import {ipcRenderer, remote} from 'electron';
const {Menu,MenuItem} =remote;

function App() {
  const [localCode,setLocalCode] =useState('');
  const [controlText,setControlText] = useState('');
  const login =async () =>{
    let code = await ipcRenderer.invoke('login');
    setLocalCode(code)
  }
  userEffect(()=>{
    login();

  },[]);
  const handleContextMenu=(e) =>{
    e.preventDefault();
    const menu = new Menu();
    menu.append(new MenuItem({
      label:'复制',
      role:'copy'
    }))
    menu.append(new MenuItem({
      label:'分享到微信',
      click:(menuItem,win,KeyboardEvent) =>{
        ipcRenderer.send('share-to-wechat','123')
      }
    }))
    menu.popup()
  }
  return (
    <div className="App">
      {/* onContextMenu监听事件 */}
      <h1 onContextMenu={(e)=>handleContextMenu(e)}> hello world!</h1> 
      <div className="App">
        {
          controlText ===''?<>
          <div>你的控制码</div>
          <span>{localCode}</span>
          </>:
          <div>{controlText}</div>
        }
      </div>
    </div>
  );
}

export default App;
