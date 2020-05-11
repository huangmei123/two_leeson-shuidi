# HTTP
- web交互的数据格式是什么？有没有方法在用户请求时提供多种数据返回格式的选择·？
传统的浏览器 text/html
- 计算机网络的知识
1. 为什么http createServer  callback req+res表达？
web编程是浏览器（n个）和服务器（1）的通信 php/node HTTP协议 网络通信的基石
HTTP协议构建于TCP/IP协议之上的网络应用层协议，
**HTTP/0.9** 1991年 学术交流 在网络之间传输HTML超文本内容
请求响应的模式 
TCP安全连接管道
- HTTP基于TCP 传输客户端 IP地址（dns domain）
  三次握手 建立起连接
  ISO七层模型
  dns有递归的查找过程 先找浏览器缓存 -> 本地host文件-> 运营商-> 。。。->美国 服务器
  chrome://chrome-urls/
  chrome://net-internals/#events
  三次握手是为了确保双方都有 req、res的能力
  1. browser syn（req+j） SYN_SENT 同步序号列
  2. ack=j+1   发回给你 发送一个自己 seq=k
  3. browser establised 状态 ack=k+1
  四次挥手
  是在断开开连接的时候发生 1：n
  发送完请求后 
  1. A->TCP发送完毕 
  2. b接受到不会立即用FIN报文回复主机A，主机A发送完一个确认ACK，同时通知自己相信的应用程序（防止A多次发送FIN
  3. TCP向A再发送一个FIN报文段 B ACK表示彻底释放
**1.0版本**
在0.9版本中连请求头 请求体都没有 连接a html文本
1994年 image/png  text/css text/js
accept ：text/html
accept-encoding ：gzip
accept-Charset： utf-8
accept-language：zh-CN
请求体 POST
状态码：202  503
Cache机制 Last Modify
userAgent有什么用？
* 使服务器能够识别客户使用的操作系抄统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等
* 用来判断浏览器类型
* 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计。
*iPhone/安卓 判断是否是移动端还是PC端*
* logs日志处理 阿里下单的30%iPhone用户花了70%的钱



2. 在哪个HTTP版本中支持对图片的解析
3. 雪碧图 http请求 合并到一张背景图上 前端性能优化技术 为什么不考了？哪个http版本里
4. userAgent在哪个版本出现 
5. 哪个版本极大地提升了下载速度