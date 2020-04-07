- 面试提问：看过async await babel编译完的代码吗？
## 异步发展历史：
  - 回调：如果有多个异步的时候
   一个个套起来
  fs.readFile('./',(content)=>{
      setTimeout(()=>{
          content += '123';
          fs.append('./',content,(err) =>{

          })
      },3000)
  })
 
  - Promise
  用.then串联起来
  Promise('./')
  .then(()=>{
      content += '123';
  })
  .then(() =>{
      fs.append('./)
  })
  .then
  - async
  async() =>{
      let c =await fs.readFile()
      c += '123';
      let res =await fs.append('./',c);
  }

## 普通函数和generator函数的区别
 普通函数会一次执行完 generator函数的执行是可以被中止/打断的
 每次遇到yield中止/打断的 
 * yield是一个区分点。
 * 调用的时候是通过一步步的next来调用。

## 协程 
## babel 就是把async和await转化为generator
