//map会给parseInt callback 
//map会给第二个参数index
//第三个参数 数组本身
parseInt('1',0) //第二个参数 二进制
parseInt('2',1)
parseInt('3',2)
console.log(['1','2','3'].map(parseInt));//结果：[1,NaN,NaN]

//js的函数化需求
//如何确保函数在运行时接收第一个参数 控制函数参数数量的的能力
let unary = fn =>val =>fn(val);
let parse = unary(parseInt); //中转
console.log(['1','2','3'].map(parseInt));
