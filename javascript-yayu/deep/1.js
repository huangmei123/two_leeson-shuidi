// function Person(){

// }
// Person.prototype.name ='kevin' 
// var person1 = new Person();
// var person2 = new Person();
// // person.name = 'kevin';
// console.log(person1.name);//kevin
// console.log(person2.name);//kevin
// console.log(person1._proto_ === Person.prototype);//true
// console.log(Person === Person.prototype.constructor)//true
// console.log(Object.getPrototypeOf(person) ===Person.prototype)//true

//实例与原型
function Person(){

}
Person.prototype.name='kevin';

var person = new Person();
person.name = 'mary';
console.log(person.name);
delete person.name;
console.log(person.name);