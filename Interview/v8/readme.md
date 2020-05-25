了解v8引擎吗？ 一段js代码是如何运行的？

- js都是单线程的 请问这个单线程包括setTimeout promise addEventListener这些吗?
是什么单线程？
在渲染进程 input dom input-> css
通过与浏览器主进程通信，主进程读取磁盘图片数据 返回给渲染进程，（URL FileReader ）
渲染进程里的js 发起ajax请求 是通过浏览器主进程 去调用网络进程发起请求，还是渲染进程可以直接
调用网络进程发送请求？
答：渲染进程可以直接调用网络进程发送请求
Ajax请求是由js的那个对象提供的？XMLHttprequest 单线程
底层是独立于js引擎之外的 
  XMLHttprequest最初是在js es6出现的，但它是以什么方式登场的？ActiveXObject
    ActiveXObject等同于插件 js如果没有 就不能主动拉取数据。
```js
//该函数创建一个通用的XMLHTTP对象
function getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined') {
        XMLHttpRequest = function () {
            try { return new ActiveXObject('Msxml2.XMLHTTP.6.0');}
                catch (e) {}
            try { return new ActiveXObject('Msxml2.XMLHTTP.3.0');}
                catch (e) {}
            try { return new ActiveXObject('Msxml2.XMLHTTP');}
                catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}
//如下代码，就可以创建一个通用的XMLHTTP对象了，简单易用
 var request = getHTTPObject();
```

渲染进程： chrome打开进程 为什么每一个tab新打开一个进程？
- 更快
  每一个进程打开一个页面更快 dom->css-> layout-> js执行
  在chrome之前 所有的tab都是公用一个进程，所以数量多了就容易卡。
  在页面越来越复杂的时候 2008年
- 更安全
  进程之间tab不能通信。

js单线程的宿主

1. js的单线程是指 V8 引擎的单线程
它只负责词法、语法、上下文环境、AST抽象语法树。。。变成二进制流运行
tab 启动 新的进程 主线程mainThread
2. GUI渲染线程
负责渲染浏览器界面html css，在构建dom树，Render树， 布局与绘制，底部的js会执行
多线程会让简单的web编程变得复杂。
3. 事件触发线程
  事件循环队列 
  不属于渲染线程，属于浏览器。
4. http请求线程
5. 定时器触发

js的单线程 = js 引擎线程
闭包 引用式赋值 动态性 作用域 隐式类型转换 这些都是js内存概念的理解

- js 小黄书 讶羽 -> 浏览器底层 联系起来所有的考点 =极客时间 （浏览器工作原理羽实践）

理解JS内存机制 可以解决面试中大部分问题
1. js语言需要手动打理内存吗？
代码首先读入到内存之中 分配代码空间，栈空间 堆空间。
2. 词法分析 
  引用式赋值
    简单数据（变量 常量）--->存放在栈空间
    复杂数据  ---> 堆空间
  - 堆排序 堆是一个二叉树 
  - 为什么在有栈空间 还要有堆空间？
  三种类型内存空间 （代码空间、栈空间、堆空间）
  栈空间是调用栈 是用来存储执行上下文的
  代码跟html一样 是不好理解的，数据结构+算法是机器能够理解的，
  代码第一步：执行栈 构建  
      第二步： 执行 
      