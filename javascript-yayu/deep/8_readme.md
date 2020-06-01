# 闭包
MDN对闭包的定义：闭包是指那些能够访问自由变量的函数。
自由变量：是指在函数中使用的 但既不是函数参数 也不是函数的局部变量的变量。
所以闭包的组成 = 函数 + 函数能够访问的自由变量
eg：
```js
var a =1;
function foo(){
    console.log(a);
}
foo()
```
foo函数可以访问变量a ，但是a既不是函数的局部变量，
也不是foo含书的参数u，所以a就是自由变量。
从理论的角度上讲：闭包是所有函数。因为他们在创建的时候就将上层上下文的数据保存起来。
从实践的角度：
- 即使创建它的上下文已经销毁，它仍然存在（比如内部函数从父函数中返回）
- 在代码中引用了自由变量

面试必刷：
```js
var data =[];
for(var i =0;i<3;i++){
    data[i] =function(){
        console.log(i)
    };
}
data[0];//3
data[1];//3
data[2];//3
```
分析：
当执行到 data[0] 函数之前，此时全局上下文的 VO 为：

globalContext = {
    VO: {
        data: [...],
        i: 3
    }
}
跟没改之前一模一样。

当执行 data[0] 函数的时候，data[0] 函数的作用域链发生了改变：

data[0]Context = {
    Scope: [AO, 匿名函数Context.AO globalContext.VO]
}
匿名函数执行上下文的AO为：

匿名函数Context = {
    AO: {
        arguments: {
            0: 0,
            length: 1
        },
        i: 0
    }
}
data[0]Context 的 AO 并没有 i 值，所以会沿着作用域链从匿名函数 Context.AO 中查找，这时候就会找 i 为 0，找到了就不会往 globalContext.VO 中查找了，即使 globalContext.VO 也有 i 的值(值为3)，所以打印的结果就是0。

data[1] 和 data[2] 是一样的道理。