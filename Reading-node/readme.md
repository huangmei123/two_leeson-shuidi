# 第一章
1. JavaScript成为Node的实现语言的原因：
  高性能、符合事件驱动、没有历史包袱
2. Node的特点
  - 异步I/O
  - 事件与回调函数
  - 单线程
  好处：不用在意状态同步问题、没有死锁、没有线程上下文交换带来性能的开销
  弱点：无法利用多核CPU、错误会导致整个应用的退出、大量计算CPU导致无法调用异步I/O
  解决方式：child_process子进程
  - 跨平台
3. Node的使用者
  - 前后端编程语言环境统一 雅虎
  - Node带来的高性能I/O用于实时应用 
    Voxer->语音
    腾讯->长连接 实时功能
    花瓣网、蘑菇街 ->stocket.io 实时通知
  - 并行I/O使用者可以高效的利用分布式环境 
    阿里巴巴的NodeFox 、eBay的ql.io->并行I/O
  - 并行I/O 有效利用稳定接口提升web渲染能力
    雪球财经 LinkedIn
  - 云计算平台提供Node支持 
    微软 阿里云 百度， Joyent为代表 
    看重开发优势 低资源占用、高性能
  - 游戏开发领域 
    网易开源了pomelo实时框架
  - 工具类 

# 第二章 模块机制
1. CommonJS规范
  - 对模块的定义：模块引用、模块定义、模块标识
  - 引用：`var math = require('math');`
  - 定义：export导出 module模块本身
  ```js
  exports.add = function(){
    var sum =0,i=0,args=arguments, l=args.length;
    while(i<1){
      sum += agrs[i+1];
    }
    return sum;
  }
  ```
  在另一个文件 
  ```js
  var math = require('math');
  exports.increment = function(val){
    return math.add(val,1)
  }
  ```
  - 标识 就是传递给require()方法的参数 必须时小驼峰命名的字符串，或者.、..开头的相对路径/绝对路径 
  其意义：将类聚的方法核变量等限定在私有的作用域中，同时支持引入的导出功能以顺畅地连接上下游依赖。
2. Node的模块实现
  - 3个步骤：路径分析、文件定位、编译执行
  
