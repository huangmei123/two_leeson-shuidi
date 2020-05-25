1、数组的解构赋值
解构：ES6允许按照一定模式 从数组和对象中提取值 对变量进行赋值 。
let [a, b, c] = [1, 2, 3];

ES6中允许写成这样 ，叫做模式匹配。 只要等号两边的模式相同 左边的变量就会被赋予对应的值。如果解构不成功 就等于undefined。
需注意：事实上 只要某种数据集二狗具有Iterator接口 都可以采用数组形式的解构赋值。
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5
fibs是一个generator函数 原生具有Iterator接口 。解构赋值就会一次从这个接口获取值。

默认值
解构赋值允许指定默认值。
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

ES6内部使用严格相等运算符（===），判断一个位置是否有值，只有当严格等于undefined，默认值才会生效。
let [x=1] = [undefined];  
x ;   --->x=1
let [x=1] = [null];
x ;  -----> null
null不严格等于undefined。
如果默认值使一个表达式 那么这个表达式时惰性求值的，就是再用到的时候 才会去求值。
function f ( ) {
  console.log( 'aaa' );
}
let [x= f( ) ] = [1];
上面的x不会取值 因为f不会执行。

2、对象的解构赋值
	Ø 解构不仅可以用于数组 还可以用于对象。
let { foo , bar } = { foo : 'aaa'； bar ：'bbb' };
foo ;  ---->aaa
bar;   ----->bbb
对象的解构与数组有一个很大的不同:
	- 数组的元素都是按次序排列的变量的取值由它的位置决定。
	- 对象的取值 重点在于必须与属性同名。
	Ø 对象的解构赋值 可以很方便的将现有对象的方法 赋值到某个变量中。
// 例一
let { log, sin, cos } = Math;
// 例二
const { log } = console;
log('hello') // hello

上面将Math对象的对数、正弦、余弦 赋值到对应的变量上 使用很方便。
对象解构赋值的内部机制： 先找到同名属性 再赋给对应的变量。真正赋值的是后者 。
let { foo : baz } = { foo:'aaa' , baz:'bbb'};
baz  ---->aaa
foo  -----> error: foo is not defined
foo是匹配的模式 baz是变量 真正被赋值的是变量 baz。
	Ø 解构也可以用于嵌套结构的对象。
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"

p是模式 不会被赋值。
如下是嵌套赋值的例子：
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
obj // {prop:123}
arr // [true]

注意：对象的解构赋值可以拿到继承的属性：
const obj1 = { };
const obj2 = { foo : 'bar' }；
Object.setPrototypeOf(obj1 , obj2);

const { foo } = obje1;
foo //'bar'
上面的代码中，对象obj1的原型对象是obj2 .foo属性不是obj1自身的属性，而是继承obje2的属性，解构赋值就可以渠道这个属性。

默认值
生效的条件：对象的属性值严格等于undefined。

注意点
	1. 如果将一个已经声明的变量用于解构赋值要很小心。
	不要将大括号写在行首 。
	let x ;  
	{ x } ={ x:1 };--->JavaScript会将{x} 理解成为一个代码块 从而语法出错。正确语法如下。
	let x;
	( { x} = {x :} );
	2. 解构赋值允许等号左边的模式之中 不放置任何变量名。 毫无意义 但是语法是合法的。比如：（ { } =[true,flase} )
	3. 可以对数组进行对象属性的解构。
	let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
	
	
3、字符串的解构赋值
字符串可以被转换成一个类似于数组的对象。同时还有一个length的属性。
const [ a,b,c,d,e] = 'hello';
a b c d e ----> a:h  b:e ….

4、数值和布尔值的解构赋值
如果等号右边是数值和布尔值 则先会转为对象。
let { toString : s } = 123;
s === NUmber.prototype.toString  //true;
let { toString :s } = true;
s === Boolean.protptype.toString //true
上面的数值和布尔值都有toString 属性，因此变量s能够取到值。
undefined和null无法转为对象 因此解构会报错。

5、函数参数的解构赋值
function add ([x,y]) { return x+y}
add([1,2]) //3 
add是表面上是一个数组 但是在传入参数的那一刻 数组参数就会被解构成变量 x 和 y。对于内部的代码来说 可以感受到的参数是x和y。
函数参数的解构页可以使用默认值。
function move ( {x = 0,y = 0} = { } ) { return [x,y]; }
move ( { x:3 , y:8});   //[3,8]
move ( {x:3} ); //[3,0]
move( ) ; //[0,0]
此时函数move 的参数是一个对象 通过这个对象进行解构 得到变量x 和 y 的值， 如果解构失败，x和y等于默认值。
function move ( {x, y} = {x:0, y:0}) { return [x,y]; } 
move({x:3,y:8}); //[3,8]
move ( { x:3 } ) ; //[3 ,undefined]
move ( { } );  // [undefined ,undefined]
此时是为函数move 的参数指定默认值 而不是为了变量x和 y指定默认值。

6、圆括号的问题
对于编译器来说 一个式子是模式 还是表达式 不能从一开始就知道 必须解析到（或者解析不到）等号才能知道。
ES6的规则： 只要有可能导致解析的歧义 就不得使用圆括号。
不能使用圆括号的情况
	1. 变量声明语句：
	let [ (a) ] = [1];   let {x:( c) } ={ };   let( {x :c} ) ={ } ;
	2. 函数参数
	function  f ( [ (z) ] ) {return z;}
	function  f ( [z,(x) ] )  {return x;}
	3. 赋值语句的模式
	 ( { p:a } ) = {p:42}
可以使用圆括号的情况
赋值语句的非模式部分 可以使用圆括号。
   [ (b) ] = [3] ;
   ( { p: (d) } ={ } ) ;
   [ (parseInt.pop) ] = [3];

7、用途
	1. 交换变量的值
	let x = 1;
let y = 2;
	[x, y] = [y, x];
	
	2. 从函数返回多个值
	// 返回一个数组
	function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
	// 返回一个对象
	function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
	
	3. 函数参数的定义
	// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);
	// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
	4. 提取JSON的数据
	let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
	let { id, status, data: number } = jsonData;
	console.log(id, status, number);
// 42, "OK", [867, 5309]
	5. 函数参数的默认值
	jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
}
	6. 遍历Map的结构
	任何部署lIterator接口的对象 都可以用 for … of循环遍历。
	const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
	for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
	7. 输入模块的指定方法
	const { SourceMapConsumer, SourceNode } = require("source-map");
