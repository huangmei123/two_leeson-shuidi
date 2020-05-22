#  1、let
- 作用 ： 声明变量 局限在let命令所在的代码块有效。
for循环的计数器 很适合let命令：
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i);
// ReferenceError: i is not defined

举例讲解：
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
因为 i是由let声明的 ，所以只在本次循环有效 ，每次循环的i都是新的变量。一个问题：每次循环的变量i都是重新声明的 那怎么记住上一轮循环的值以及计算出本轮循环的值？ 因为javascript引擎内部都会记住上一轮的值，，初始化的i都是在上一轮的基础上进行计算的。
for的特别： 设置循环变量的父作用域 循环体内的是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
输出了3次abc =》 函数内部的i和循环变量的i不是在同一个作用域的 有各自单独的作用域。

## 不存在变量提升的情况
var 存在变量提升的现象 就是变量可以在声明之前使用，值为undefined（已经存在 但是没有值）。
但是let纠正了这个奇怪的逻辑，一定要在使用之前声明。

## 暂时性死区（TDZ)
只要块级作用域存在let命令 它所声明的变量就绑定（binding）这个区域，不受外部的影响。简单说明就是使用之前一定要声明。
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError
let tmp; // TDZ结束
  console.log(tmp); // undefined
tmp = 123;
  console.log(tmp); // 123
}

TDZ意味着 typeof 不是一个百分之百安全的操作了。
typeof x; // ReferenceError
let x;
在let声明之前都是tdz区 所以typeof会抛错。
有些死区不易被发现：
function bar （ x =y ，y=2）{
   return [x,y]
}
bar ( );//报错。
这是因为y在使用之前没有声明。
let x = x ；
此时也报错 这是因为这个x还没有执行完成就取x的值，导致x未定义。
暂时性死区的本质：只要进入当前作用域，要使用的变量就已经存在了，但是不可获取，只有当声明变量的那一行出现 才能获取和使用该变量。

## 不允许重复声明
let不能在相同作用域重复声明同一个变量。
function func( ){
let a= 10;
let a= 1;
} //报错
不能在函数内部重新声明参数
function func (arg ){
let arg;
}//报错

# 2、块级作用域
- 原因：
第一：内层变量可能会覆盖外层变量。
第二：用来计数的循环变量泄露为全局变量。
ES6的块级作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
这个例子都声明了变量n 输出5.外层代码块不受内层代码块的影响。

	- ES6允许块级作用域的任意嵌套。
	- 内层作用域可以定义外层作用域的同名变量
	{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
	- 块级作用域的出现 实际上让获得广泛应用的匿名立即执行函数表达式不再必要了。
	/ IIFE 写法
(function () {
  var tmp = ...;
  ...
}());
	// 块级作用域写法
{
  let tmp = ...;
  ...
}
	
	
## 块级作用域与函数声明
在ES5中 函数只能在顶层作用域和函数作用域之中声明 ，不能再块级作用域中声明。

