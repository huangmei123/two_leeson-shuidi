## 性能优化

- 当网页输入 网址（例如百度） 会发生什么？
**状态码**
全栈启用https
301是永久性跳转
302是临时性的跳转
  GET请求方法是没有问题 但是其他的POST就会降级为GET(忽略mess。字段)
304是
307是临时性的跳转 
  api POST
  http->https都会使用307
- 点击一个a 不跳转怎么做？
prevent、

1开头的状态码表示目前正常 客户端可以继续发送请求或忽略这个响应
  101 Switching Protocol
  将http升级 websocket 协议的时候可以用
2开头  
  204没有返回 没有出现错误
  205不返回内容 要求刷新视图 应用场景是：表单不要多次提交
  206是HTTP 分块下载和断点续传
  场景：实现断点续传或者将一个大文档分解为多个下载段同时下载。
3
  301永久跳转 http->https 用于域名废弃 老用户从老域名出来
  302临时跳转
  304 Not Modified 
    响应头： Last-Modified
    if-modified-Since
400
  Bad Request 报文存在错误
  401 Unauthorized
  403 请求被拒绝
  404
  405 Methods NotAllowed
  408 request Timeout
  409 多个请求冲突
  414 请求里的URI太长
  429 客户端发送太多的请求
  431 请求头的字段内容太大
5
  500 
  501服务器不支持客户端的请求方式
  502 Not Implemented
  503 服务器忙 请求的太多
  504

- js优化我们可以做什么？
  - eval 和 with都不要用 
  前期需要有eval 它可以把任何的js文本运行起来 曾经是黑科技
  但是*特别消耗性能，有安全问题XSS攻击*
  cookie里可能有用户的身份信息，如果遭受eval （就会以文本的形式执行输出）， ajax发给给他自己服务器的jsonp
  【很多都是使用cookie识别身份信息的】
  那我们怎么解决？
    - 可以为网站的cookie加一个HttpOnly属性
    - 用户输入 进行前后端转义，encodeURIComponent<script>''
  - 加载的顺序
    css head 尽快看到页面
    js文件从下载开始放在body的尾部 设计成阻塞（为什么会阻塞？因为js里是动态的代码。要动态操作DOM ，要等待下载且执行完毕才会往下操作，）
    css 雪碧图 现在有必要嘛？好处：只发送一次HTTP请求。缺点：第一次下载的时候有点慢，
    alley的iconfont为什么这样用不会影响性能？
    背景图直接img src=""增加http请求，没有http请求（因为被webpack打包成base64）
    如果有请求 因为http协议（1.0版本）更新了对它的支持
    这是因为alley cdn（第一次会从远程拉到本地来，共享使用）。在各个地方 部署cdn集群img.taobao.com

  - js动画优化 requestAnimationFrame


