const {Map,fromJS} =require('immutable')
//immutable  不可变数据流管理
//js 深拷贝 浅拷贝
//对象的修改 引用式复制，
//immutable生成一个全新的对象（就是生成一个浅拷贝）
const map1 = Map({a:1,b:2,c:3});
//不会改变map1 体现了react思想， 状态也是组件的一部分，之前的reducer oldState不应该被改变
//新的应用状态对应新的对象 用immutable
const map2=map1.set('b',50);
console.log(map1,map2)