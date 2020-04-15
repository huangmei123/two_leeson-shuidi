const getUserInfo2 =function(user){//参数随意
  return `name:${user.name},age:${user.age}`
}

//js不会做运行检测的，因为它是动态语言， java、ts静态语言
//先编译再运行 检测语法
//当多人协作时，不严格的语法，会带来很大的麻烦
console.log(getUserInfo2({name:"蓬松的头发"}))