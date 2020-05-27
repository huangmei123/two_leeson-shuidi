# 原型到原型链

## prototype
它是函数才会有的属性。它指向的是一个对象，这个对象是实例（person1和person2）的原型。
原型：每一个对象在创建的时候会关联另一个对象（就是原型），每一个对象都会从原型继承属性。

## __proto__
买一个对象（除null）都有的属性，__proto__指向这个对象的原型。

* 实例对象和构造函数都能指向原型。
提问：原型能否指向构造函数或者实例？
答：不能指向实例 因为一个构造函数可以生成多个实例 但是原型指向构造函数。
## constructor
每一个原型都有constructor属性指向*关联的构造函数*。

构造函数 实例原型 实例的关系
- 实例（__proto__)和实例原型  person._proto_ === Person.prototype
- 实例原型（constructor）和构造函数  Person.prototype.contructor  === Person
- 实例的__proto__ 和构造函数的prototype person.__proto_ == Person.prototype

## 实例与原型
在读取实例的属性时，如果找不到 就会查找与对象关联的原型的属性 ，如果还找不到 就会去找原型的原型。
- 原型的原型
原型也是一个对象 ，原型对象是通过Object构造函数生成的，实例的__proto__ ==构造函数的prototype.
person.__proto__ == Person.prototype

## 原型链
Object.prototype的原型是？
Object.prototype_proto_ ===null //true
null代表了？？
* null 表示没有对象 该处不应该有值。
Object.prototype._proto_ 的值为null 和Object.prototype没有原型是一个意思。

补充：
- 关于constructor
```js
function Person(){

}
var person=new Person();
console.log(person.contructor ===Person); //true
```
读取person.contructor时，person没有contructor属性 读取不到，就会从person的原型就是Person.prototype1去读取。
所有 person.controctor ===Person.prototype.contructor.

- 关于__proto__
绝大部分都支持这个方法访问原型 但是它不存在于Person.prototype。
它来自于Object.prototype.当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。

- 关于继承
继承意味着复制操作，但是JavaScript默认不会复制对象的属性，只是在两个对象之间创建关联 ，此时一个对象就可以通过委托访问另一个对象的属性和函数。所以委托更合适。
