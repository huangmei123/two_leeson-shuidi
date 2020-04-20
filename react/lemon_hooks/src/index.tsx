// import "./app.css";
// console.log('welcome');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './hello';
import {App} from './app';
ReactDOM.render(
  //react hooks 超越 redux vuex的新特性 跨组件共享状态
  //defaultUserName可以被组件共享状态

  // const [name,setName] = React.useState('defaultUserName');
  // <HelloComponent username={name}/>,
  <App />,
  document.getElementById('root')
)