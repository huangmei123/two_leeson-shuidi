// 深拷贝 考虑对象相互引用以及symbol拷贝的情况
//浅拷贝 数组的浅拷贝：slice、concat返回一个新数组的特性来实现拷贝
// var deepCopy = function(obj) { 
//     if (typeof obj !== 'object') return; 
//     var newObj = obj instanceof Array ? [] : {};
//     for (var key in obj) { 
//         if (obj.hasOwnProperty(key)) { 
//             newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
//         } 
//     } 
//     return newObj; 
// }
function deepCopy(obj){
  var cobj;
  if(obj ===null){
      return obj;
  }
  let t=typeof obj;
  switch(t){
      case 'string':
      case 'number':
      case 'boolean':
      case 'undefined':
          return obj;
  }
  if(Array.isArray(obj)){
      cobj=[];
      obj.forEach((c,j)=>{
          cobj.push(deepCopy(obj[i]))
      })
  }else{
      cobj ={}
      if(Object.prototype.toString.call(obj)== "[object Object"){
        //   WeakSet weakMap
        Object.getOwnPropertyNames(obj)
          .concat(Object.getOwnPropertySymbols(obj))
          .forEach(c =>{
              cobj[c] = deepCopy(obj[c]);                                                                                                                                   
          })
      }else{
          cobj = obj;
      }
  }
//简单数据类型 
//复杂数据类型
  return cobj;
}

var a = {a:'1',b:[1,2,3,4,{t:'test'}],
[Symbol()]:'symbol',d:new Date(),r:RegExp('^\\d$')};