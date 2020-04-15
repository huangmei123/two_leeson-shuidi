
// type关键字 
//(user:IUser) =>string; 返回的类型时string
type IUserInfoFunc =(user:IUser) =>string;
//接口
interface IUser{
    name:string,
    age:number
}
//函数的定义
//getUserInfos的类型为IUserInfoFunc
const getUserInfos:IUserInfoFunc=user => {
  return `name:${user.name} ,age:${user.age}`;

}
console.log(getUserInfos({name:"",age:12}))