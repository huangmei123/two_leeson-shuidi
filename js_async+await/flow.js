// - 回调：如果有多个异步的时候
//    一个个套起来
  fs.readFile('./',(content)=>{
      setTimeout(()=>{
          content += '123';
          fs.append('./',content,(err) =>{

          })
      },3000)
  })
 
//   - Promise
//   用.then串联起来
  Promise('./')
  .then(()=>{
      content += '123';
  })
  .then(() =>{
      fs.append('./')
  })
  .then()
//   - async
  async() =>{
      let c =await fs.readFile()
      c += '123';
      let res =await fs.append('./',c);
  }
//es6=> generateor
  co(
      //用*就是表示不是一个普通的方法 而是一个generateor
      function * test(){
          //c的值是promise resolve的值
          let c =yield fs.readFile();
          c += '123';
          let res = yield fs.append('./',c);
      }
  )
  // 重点
  let p = Promise.resolve(1);
  let p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(234)
    }, 2000)
  })
(async function() {
  // await 后面 接 promise ？？？因为只有resolve和then 才能保证顺序
  // 接 promise 才能够保证 顺序
  let c = await p; //只有等p resolve 剩下的才能执行
  let d = await p2;
  let f = await 789
  console.log(c);
})()
//如果没有await和async 只有promise才能保证顺序
// 怎么 保证 p resolve 后面代码才会执行
//有些文章说异步变同步 说法不严谨 执行起来还是异步
// 都用 Promise.resolve 包装一层 
//不用判断 await、yield 后面 到底是 promise（有 then方法）还是非 promise（没有 then方法）
Promise.resolve(p).then(() => {
  Promise.resolve(p2).then(() => {
    Promise.resolve(789).then(() => {
      console.log(c);
    })
  })
})
//下一个yield代码（g.next())怎么挪到then回调里
//
