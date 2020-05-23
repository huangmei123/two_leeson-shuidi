# 1、let
作用 ： 声明变量 局限在let命令所在的代码块有效。
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
原因：
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
在ES5中 函数只能在顶层作用域和函数作用域之中声明 ，不能在块级作用域中声明。有以下2种情况
1 .if(true) { function f( ) { }}
2 .try { function f( ) {}  }catch（e） {….}
但是浏览器为了兼容一前的旧代码 还是支持在块级作用域中声明函数 因此上面代码还是能运行。
在ES6中 引入了块级作用域， 明确规定允许在块级作用域中声明函数 。规定 在块级作用域中 函数声明语句的行为类似于let 在块级作用域之外不可引用。
一段代码：
function f ( ) { cosole.log( ' I am outside '); }

(function ( ) {
  if ( false ) {
    function f ( ) { console.log( 'I am inside ') ;}
}
f ( );
} ( ) );
这段代码要是在es5中运行 得到 I am inside 。因为在if 内声明的函数f 会被提升到函数的头部。
但是es6中 理论上会得到 I am outside 。因为块级作用域内声明的函数了类似于 let ，对作用域之外没有影响。但是如果真的运行 就会报错！
如果 改变了块级作用域内声明函数的处理规则，会对老代码产生很大影响。
为了减轻因此产生的不兼容问题。，es6规定了，浏览器可以有自己的行为方式：
    -允许在块级作用域内声明函数
    -函数声明类似于var， 即会提升到全局作用域或者函数作用域的头部。
    -同时 还会提升到所在的块级作用域的头部
以上只对es6的浏览器有效。
为了减少麻烦 最好不要在块级作用域内声明函数 ，实在需要就写成函数表达式，不要写函数声明语句。
函数声明语句：{ let a = 'secret '; function f ( ) {  return a ; } }
函数表达式  ： let a = 'secret '; let f = function( ) { return a; } ;}
ES6 的块级作用域必须要有大括号。
if ( true ) let x = 1;  ----->报错
if (true ) { let x = 1;}  ----->不报错
函数只能在当前作用域的顶层 。
' use star ';  
if ( true ) { function f ( ) { } } ------>报错
' use star ';
if ( true ) function f ( ) { } ------->不报错

# 3、const命令
	- 基本用法： 声明一个只读的常量，一旦声明 值就不能改变，就必须马上初始化 ，不能留到以后赋值。
	- 只在声明所在的块级作用域之内有效。
	- const命令声明的常量也是不能提升的 同样存在暂时性死区 只能在声明的位置后面使用。
	- 不可重复声明
	- const的本质上 是变量指向的那个内存地址所保存的数据不得改动。对于简单的类型比如数值、字符串、布尔值，就相当于常量了，但是对于复合型的类型比如对象和数组，保存的就是一个指针。
ES6 声明变量的六种方式
  es5只有var和function es6添加了 let和const、import和class

# 4、顶层对象的属性
顶层对象 在浏览器指的是window对象 在node指的是global对象 。
在es5中 顶层对象的属性和全局变量是等价的。
window.a = 1;
a

a=2;
window.a
上面的顶层对象的属性赋值于全局变量的赋值 是同一件事。但是这件事情带来很多问题，ES6中全局变量将逐步于顶层对象的属性脱钩。第一 var命令和function命令声明的全局变量 依旧是顶层对象的属性，第二 let、const、class声明的全局变量不属于顶层对象的属性。

# 5、globalThis对象
JavaScript语言中存在一个顶层对象 ，它提供全局环境（全局作用域） 所有的代码都是在这个环境中运行的。
以下内容了解：
顶层对象在各种实现里面是不统一的。
	- 浏览器里 顶层对象是window 但node和web worker 没有window
	- 浏览器和web worker  ，self也指向顶层对象 
