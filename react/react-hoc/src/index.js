import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <button id="add">add</button>
    <button id="min">min</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//举例 对数据的抽象
let a = 1+2-3;
let b = 2+3-5;
let c = 4+2-6;
//共同点：求和 再求差
//不同点：通过参数传进来
//http://baidu.com?a=1&b=2&c=3  =>{a:1,b=2,c=3}
function urlPares(){
//相同点封装再里面
  return {}
}
function operation(a,b,c){
  //不同点就用参数传进来
  return a+b-c;
}
//一样的思维 
class Url{
  urlPares(){}
  urlStringfy(){}
}
//把url这个数据抽离出来，和urlParse方法分离

//FP:对过程抽象
window.onload = function(){
  const add = document.getElementById('add');
  const min = document.getElementById('min');
  let delay = 2000;
  //使用时间戳
  let prev = Date.now()
  add.onclick =throttle(function(){
    // let now = Date.now();
    // if(now-prev >2000){
      console.log('发出请求');
      // prev=now
    // }  
  },2000)
  //1.prev
  min.onclick = throttle(function(){
    //2.now
    //3.判断时间间隔
    //4.prev=now
    console.log('send req')
  },2000)
  //两个按钮都要节流 怎么封装？
  //lodash: throttle(func,wait)

  /*
  * 封装思路：相同：1234
  * 不同：干的事情不一样（function），要传一个参数
  *  函数的一等公民 函数和其他变量（number，string）有同等的地位
  *  他们都可以做函数的参数传递，也可以当作函数的返回值返回
  */ 
 //高阶函数 high order function (HOF)
 //react => 高阶组件： high order component(HOC)
  function throttle(func,wait){
    let time1 = Date.now()  //  1
    //onclick = 函数
    return function(){
      //里面的这个函数 就是我们返回给onclick的 onclick执行的也是里面这层函数
      let time2 = Date.now();
      //3
      if(time2 - time1 > wait){
        //间隔时机到了
        func()
        //4
        time1= time2
      }
    }
  }
}
 /*
 * A：需要获取当前的鼠标位置信息
 * B: 需要获取当前的鼠标位置信息
 */
