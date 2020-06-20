明确哪些情况下代码在执行之前进行编译并创建执行上下文：
1.执行全局代码的时候，在整个页面的生命周期，全局执行上下文只有一份。
2.当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行之后，创建的函数执行上下文会被销毁
3.当使用eval函数的时候，eval的代码也会被编译。并下黄健执行上下文。

调用栈：
	- 帮助理解JavaScript引擎背后的工作原理
	- 有调试JavaScript代码的能力
	- 面试常考



JavaScript中经常有一个函数调用另一个函数的情况，调用栈就是用来管理函数调用关系的一种数据结构。要明白 函数调用 和 栈结构
函数调用
就是运行一个函数，具体使用方法就是使用函数名称跟着一对小括号。
var a = 2;
function add( ) { var b = 10 ;return a+b } add ( )
上面的例子就是先创建了一个函数 ，再最下面调用它。





当执行到add函数的时候，就有2个执行上下文------全局执行上下文和add函数的执行上下文。
栈
简单理解：一条单行道，一短堵住，只能在一个入口进出。单行道就是栈容器，进入单行道叫做入栈，退出单行道叫做出栈。
具有后进先出特点。
调用栈
在执行上下文创建后之后，JavaScript引擎会姜执行上下文压入栈中，用来管理上下文栈称为执行上下文栈，又称调用栈。

var a = 2
function add(b,c){
  return b+c
}
function addAll(b,c){
var d = 10
result = add(b,c)
return  a+result+d
}
addAll(3,6)
第一步：创建全局上下文，并将其压入栈底。
变量环境： a=undefined
                  add = function(){..}
                  addAll = function(){..}
词法环境
压入栈以后，JavaScript引擎便来时执行全局代码了。先执行a=2的赋值操作

第二步： 调用addAll函数。JavaScript引擎编译该函数，并为其创建一个人执行上下文，并将该函数的执行上下文压入栈中。

addAll函数的执行上下文创建好之后，便进入函数代码的执行阶段了，先执行d=10.
第三步：当执行到add函数调用语句的时候，会创建执行上下文并压入栈中。

当add函数返回的，该函数的执行上下文从栈顶弹出。
紧接着addAll执行最后一个相加操作后并返回，addAll的执行上下文也会从栈顶弹出。最后一个全局执行上下文也会接着执行完毕。

在开发中 如何利用好调用栈
1.如何利用浏览器查看调用栈的信息
开发者工具---> Source标签 ----> 选择JavaScript页面----> 在需要的地方加入断点 ，并刷新-----> 右边的call stack 查看当前的调用栈的情况。
栈底部是anonymous（全局的函数入口）
还可以使用console.trace( )来输出当前的函数调用关系。
2.栈溢出（stack Overflow）
调用栈是有一定的大小的，当入栈的执行上下文超过一定的数目，JavaScript引擎就会报错，这个就叫栈溢出。
当写递归代码的时候，就容易出现溢出的情况。

function division(a,b){
    return division(a,b)
}
console.log(division(1,2))
当JavaScript引擎执行该代码的时候，首先调用函数division，并创建执行上下文，然而它是递归的，没有任何终止条件，所以会一直创建新的执行上下文。
解决办法：把递归调用的形式改造成其他的形式，或者使用加入定时器的方法把当前的任务拆分为很多很小的任务。

思考：

function runStack (n) {
  if (n === 0) return 100;
  return runStack( n- 2);
}
runStack(50000)
优化这段递归代码
不进栈 就不会溢出，修改如下：
function runStack(n) {
if( n === 0 ) return 100;
return setTimeout ( function ( ) {
runStack ( n - 2) } ,0) ;
}
runStack(50000)
