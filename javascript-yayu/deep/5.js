// //函数执行上下文中作用域链和变量对象的创建过程
// var scope = "global scope";
// function chechscope(){
//     var scope2 = 'local scope';
//     return scope2;
// }
// checkscope();

// //执行过程如下
// //1.checkscope函数被创建，保存作用域链到内部属性[[scope]]\
// checkscope.[[scope]] = [
//     globalConyext.VO
// ]
// //2. 执行checkscope函数，创建checkscope函数执行上下文，
// //checkscope函数执行上下文被压入执行上下文栈。
// ECStack = [
//     checkscopeContext,
//     globalContext
// ];
// //3.checkscope函数并不立刻执行 开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
// checkscopeContext = {
//     Scope：checkscope[[scope]]
// }
// //4.第二步： 用arguments创建活动对象，随后u初始化活动对象，加入形参、函数声明、变量声明
// checkscopeContext = {
//     AO:{
//         arguments:{
//             length:0
//         },
//         scope2:undefined
//     },
//     Scope:chechscope.[[scope]]
// }
// //5.第三步：将活动对象压入checkscope作用域链顶端
// chechscopeContext ={
//     AO:{
//         arguments:{
//             length:0
//         },
//         scope2.undefined
//     },
//     Scope:[AO,[[scope]]]
// }

// //6.准备工作完成，开始执行函数 随着函数的执行 修改AO的属性值
// checkscopeContext = {
//     AO:{
//         arguments:{
//             length:0
//         },
//         scope2:'local scope'
//     },
//     Scope:[AO,[[Scope]]]
// }
// //7.查找scope2的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
// ECStack =[
//     globalContext
// ]