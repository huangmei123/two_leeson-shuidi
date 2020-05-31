function foo(a){
    var b = 2;
    function c(){}
    var d = function(){};
        b = 3;
}
foo(1);
//进入之后的AO（活动对象）
/*AO = {
    arguments:{
        0:1,
        length:1
    },
    a:1,
    b:undefined,
    c:reference to function c(){},
    d:undefined
}*/

console.log(foo)
function foo(){
    console.log("foo");
}
var foo = 1;

