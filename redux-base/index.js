const{createStore}=require('redux');
let a =123;
//最常见的状态定义state
let globalState={
    home:{},
    login:{}
}
//在redux定义 要使用reducer去推导出state
function reducer(state,action){
    // return {
    //     home:'home state',
    //     login:'login state'
    // }
    console.log('达到reducer',state,action);
    if(action.type === 'change_home_state'){
        return{
            home:action.home
        }
    }
  return{
      home:'home state',
      login:'login state'
  }
}
//要改变state的数据要发起一个action
//action是js里的对象
//type： 发起这次action
//除了type属性 其他都是自定义的
//dispatch->action->reduce(纯函数 考虑state默认值，考虑后序state的变化) ->state

let action={
  type :'change_home_state',
  home:'home_state 1',
  a:1,b:2
}
//a就是一个状态
/*

若是return（<div>{{a}}</div>
尽量避免全局变量：因为若是取值则问题不大，但是如果是修改，就很容易把全局变量修改掉，容易出bug
redux/vuex都要设计一套流程修改state：dispatch-》action-》mutation->state

*/
let store=createStore(reducer);
console.log(store.getState());
//修改默认值
store.dispatch(action)
console.log(store.getState());