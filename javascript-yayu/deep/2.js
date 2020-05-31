// var value = 1;
// function foo (){
//     console.log(value);
// }
// function bar(){
//     var value = 2;
//     foo();
// }
// bar();//1
//如果是静态作用域 先执行foo 从内部开始找value，没有就根据代码的上下找上一层，就是value=1；
//如果是动态作用域，也是从内部开始查找value，没有就从调用函数的作用域，也就是bar函数的内部开始找vaue 就是value=2；

var scope="global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f()
}
checkscope();

var scope = "global scope";
function checkscope(){
    var scope ="local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
//都会打印 local scope
//因为JavaScript采用的是词法作用域，作用域是在创建的时候决定的
//但是执行的上下文栈的变化不一样。
