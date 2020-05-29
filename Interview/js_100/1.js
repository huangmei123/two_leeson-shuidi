//var a=2；变量的查询 LHS查寻
// 试图找到变量的容器本身 从而对其赋值
// RHS查询 简单的查找某个变量的值别无二致 一般出现在赋值运算符（=）的右侧

function chageObjProperty(o){  //o为形参  是LHS  RHS哪种查询？
    o.siteUrl = 'http://www.baidu.com';
    o=new Object(); //对o进行重新赋值 
    o.siteUrl = 'http://www.google.com'
}
let webSite= new Object();//webSite是复杂数据类型 
chageObjProperty(webSite);
console.log(webSite.siteUrl); //hhtp://www.baidu.com