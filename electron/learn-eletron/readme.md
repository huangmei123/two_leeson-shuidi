electron 是js在exe的应用
chromium(chrome开源版本 ，腾讯浏览器部门)
electron = chromium + node（系统 fs net） 桌面应用
用web技术html/css/js 来做桌面应用，好处是:开发效率高
- 跨平台 全端
- 滴滴 内部的即时通讯
- RN Flutter Electron

它是拓宽能力的一种学习，Mozilla开拓了浏览器内置devtool
**window.navigator.userAgent**这个命令可以可以判断是手机还是PCZ
- chrome navigator.userAgent为什么又Mozilla字段
首先要打开js视野


- 浏览器的进化历史：
1989年 互联网诞生 伯纳斯·李
1990 Nexus 缺点不能显示图片 此时是HTTP 0.9版本
1993 NSCA 可以看到图片 
1994 网景公司 NetScape出现 （就是Mozilla）
     提供了iframe支持，iframe是框架嵌入（嵌入第三方页面），简单说就是上广告的。
     出现网关 
     在后端、服务器端 根据useAgent判断（HTTP 1.0) 若是Mozilla推出iframe页面，若是
     NSCA不带iframe 
1994 IE浏览器 Win95  在自己的useAgent中加入Mozilla的声明
     JavaScript 10天开发出来了 
2002 Mozilla出现新版本
2008 基于Firefox chrome推出来，它是极致的简洁 多进程的快速加稳定 10倍速的v8引擎
2009 node的作者Ryan Dahl 基于v8引擎（JS解析） 通过c++的接口可以操作硬件/设备驱动 js的非阻塞IO
     实现js在服务器的渲染 
2011 英特尔王文睿 node-webkit 浏览器内核与浏览器结合起来
2012 electron 

electron = chromium + node （系统 fs net 底层操作能力 npm） 桌面应用 + NativeAPI
（跨平台+windows+linux 右键符值 *屏蔽不同操作系统的兼容性*） 能力再一次延申

移动互联网 React/Vue 出现（意义：DOM API性能差 代码复用）
electron 和 Native/Flutter/UniApp 混合开发 结束了 IOS/Android

eletron 项目 架构
  REACT/VUE
  Native
  
mvc 是B/S的架构 
mvvm 是REACT/VUE 