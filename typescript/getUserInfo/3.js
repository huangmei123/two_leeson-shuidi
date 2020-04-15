//getUserInfo的开发者
//当类型是一个基础类型，在多个地方会使用到的时候 
// user实现了IUser一样的属性和方法的对象 接口
var getUserInfo = function (user) {
    // if(true){
    //     return 123;
    // }
    return "name:" + user.name + ",age:" + user.age;
};
getUserInfo({ name: '淡黄', age: 12 });
