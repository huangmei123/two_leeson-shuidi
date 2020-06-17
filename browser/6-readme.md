关于JavaScript执行顺序的3个结论：
1.在执行过程中，若使用了未声明的变量，那么JavaScript会执行报错。
2.在一个变量定义（var myname=xxx）之前使用使用它 ，不会报错，但是该变量的值为undefined。
3.在函数定义（showName（））之前使用他，不会报错，且函数能正确执行。

变量和函数为什么能在定义之前使用？为什么处理方式不一样？
变量提升
声明和赋值：
var myname = '极客'
解析：
var myname //声明部分
myname = ‘极客时间’ //赋值部分
函数的声明和赋值：
function foo() { console.log('foo') }
var bar = function( ){ console.log( 'bar') }
第一个只有声明。
第二个 :
var bar =undefined //声明
bar = function ( ) { console.log('bar') } //赋值
变量提升：在代码的执行过程中，JavaScript引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。
变量提升后，会给变量设置默认值，这个默认值就是我们熟悉的undefined。

JavaScript代码的执行流程
变量提升从概念上讲会把声明移动代码最前面，但实际上变量和函数的声明在代码中的位置是不会改变的，而且是在编译姐u但被JavaScript引擎放入内存中。
一段代码------> 编译阶段------>执行阶段
	1. 编译阶段
编译阶段和变量提升是什么关系？

