//MVVM数据劫持
//proxy 代替defineprototype
// 开始用数组装一个数据，对数组进行佛如循环 性能大开销

// var arr = [1];
// arr[10000] =1;

// function a(){
//     console.time();
//     for ( var i = 0;i<arr.length;i++){
//         console.log(1)
//     }
//     console.timeEnd();
// }
// a();
// function b(){
//     console.time();
//     arr.forEach(item =>{console.log(2)})
//     console.timeEnd()
// }
// b();
// 两个方法不一样 for forEach
// forEach是以数组拥有的key 虽然有一万 但是key只有2个。拿到key再循环
//数组是一个容器 在v8引擎中做2种准备 数字索引和字符串索引

//vue defineProperty不支持数组变化的响应式代理
//对数组进行数据劫持
//defineProperty是可以对数组进行数据劫持的 不过对新增的数据项没有效果
var arr =[1,2,3,4]
arr.forEach((item,index)=>{
    //对每一个属性单独的数据劫持 get set
  Object.defineProperty(arr,index,{
      set:function(val){
          console.log('set');
          item = val
      },
      get:function(val){
          console.log('get');
          return item;
      }
  })
})

arr[1];
arr[1]=-1;
arr[5]=2;