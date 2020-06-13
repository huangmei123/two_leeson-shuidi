function supFather(name){
    this.name = name;
    this.colors = ['red','bule','green']
}
supFather.prototype.sayName = function(age){
    console.log(this.name,'age');
}

function sub(name,age){
    supFather.call(this.name);//call继承
    this.age = age;
}

function inheritPrototype(sonFn,fatherFn){
    //完成子类对父类的原型的继承
    //如何实现
    sonFn.prototype=Object.create(fatherFn.prototype);
    sonFn.prototype.constructor = sonFn;
}
inheritPrototype(sub,supFather);
sub.prototype.sayAge=function(){
    
}