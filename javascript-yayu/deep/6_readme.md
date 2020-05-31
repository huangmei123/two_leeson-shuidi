# 从ECMAScript 规范解读this
规范网址：http://yanhaijing.com/es5/#115
ECMACript规范中有一种只存在于规范中的类型 他们的作用时用来描述语言底层行为逻辑。
## Reference
Reference类型就是用来解决诸如delete、typeof以及赋值等操作行为的。
只存在于规范里的抽象类型 它们是为了更好地描述语言的底层行为逻辑才存在的，并不存在于js代码中。
Reference由3个部分组：
- base value
- referenced name
- strict reference
base value就是属性所在的对象或者就是EnvironmentRecord，它的值只可能是 undefined、an Object 、 a Boolean 、 a String、 a Number 、or an environment record的一种。
reference name就是属性的名称
比如：
```js
var foo = ;
var fooReference = {
    base: EnvironmentRecord,
    name:'foo',
    strict:false
};
```
获取Reference组成部分的方法：GetBase 、IsPropertyReference
  - GetBase 返回reference的base value
  - IsPropertyReference 如果base value是一个对象 就返回true
## GetValue
是一个从Reference类型获取对应值的方法
```js
var foo = 1;
var fooReference ={
    base:EnvironmentRecord,
    name: 'foo',
    strict:false
};
GetValue(fooReference) //1
```
GetValue返回对象属性真正的值，但是注意：*调用GetValue，返回的将是具体的值，而不再是一个Reference*

## 如何确定this的值
1. 计算MemberExpression的结果赋值给ref
2. 判断ref是不是一个Reference类型
2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

2.3 如果 ref 不是 Reference，那么 this 的值为 undefined

- 关于第一步
什么是MemberExpression？
举个例子：
```js
function foo(){
    console.log(this)
}
foo(); //MemberExpression是foo
function foo(){
    return function (){
        console.log(this)
    }
}
foo()();//MemberExpression是foo()
var foo = {
    bar:function(){
        return this;
    }
}
foo.bar();//MemberExpression是foo.bar
```
**简答理解 MemberExpression就是()左边的部分**
- 关于第二步
关键在于看规范如何处理各种MemberExpression，返回的结果是不是一个Reference类型。

未完待续......