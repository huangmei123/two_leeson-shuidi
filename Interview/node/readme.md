libuv 的理解
1. 用node读文件时，都发生什么？类似于输入url发生了什么这个问题
node Api IO处理 异步？
fs.readFileSync  fs.readFile fs.creatReadstream()
但这都是表层的。

- node架构层
v8，babel webpack 抽象语法树 AST
中间层 fs ....->c++
2. 前端 webkit 中间件 html5 调用摄像头 文件 存储... 可以是什么？
3. JS可以用于什么应用场景，它的架构是什么？
  electron chrome-> chromium
4. 小程序 html-> wxml css->wxss
5. RN

- 2.node 底层
  - 上层 API层
    调用node的API层fs核块相关功能
  - node.js Bindings c++ 对fs模块的实现
  - node.js底层 基于时间机制的node event loop stream 流操作 libuv
    libuv内部封装了对event loop stream
    v8 
    c-ares 异步的DNS 请求库
    http_parser OPENSSL,zlib
    libuv 是一个高性能、事件驱动的I/O库，并且提供了跨平台的API
    异步 事件驱动的编程风格 核心使命是提供一个event loop定时器，基于I/O的其他事件的回调函数 非阻塞的网络支持 异步文件系统访问 子进程
    
    js是单线程的 但是libuv并不是

- 执行顺序 event loop
  1. event loop在前后端的区别
  事件驱动机制 + 循环事件栈
  2. 不一样的结果？是node 11.x 版本对 timer 阶段做了优化
  前端及传统的node v11实嵌 event loop在每次执行一个宏任务的适合 setTimeout setInterval
   