最简单的例子： 
	- 输入url打开网页
	- ajax获取数据
	- img标签加载图片
第一章： Http协议基础与发展类型
一、5层网络模型的介绍
物理层：定义设备如何传输数据。电脑的硬件、网卡、网络端口。
数据链路层：通信在实体间建立数据链路连接。把2台机器链接在一起。
网络层：为数据在节点之间传输创建逻辑链路。
传输层：向用户提供可靠的端到端服务。传输层向高层屏蔽了下层数据通信的细节。
应用层：http协议 为应用软件提供很多服务。构建于TCP协议之上，屏蔽网络传输的相关细节。

二、HTTP协议的发展史
http/0.9 只有一个命令，没有header等描述数据的信息。服务器发送完毕就关闭tcp连接。
http/1.0 增加很多命令， 增加status code 和header，多字符集支持、多部分发送、权限 缓存
http/1.1 持久连接，pipeline（同一个连接多个请求），增加了host（同一台物理服务器跑多个服务）和其他命令
http2 所有的数据都是以二进制传输，同一个连接里面发送多个请求不再需要按顺序来，头信息压缩以及推送等提高效率的功能。

三、HTTP的三次握手
客户端和服务器需要建立TCP connection。在基础上实现HTTP的发送和请求的包。
三次握手的原因：防止服务端开启一些无用的连接，防止数据包丢失，客户端没有接收到返回的包，出现超时。

四、URI URL URN
uri 是包含url和urn。是一个统一资源符。定位某一个特定的资源。
url 统一资源定位器，找资源的位置并访问他。

http://user:pass@host.com:80/path?query=string#hash
解析：http是协议
user：pass 需要特定的身份去访问（基本不用）
host.com 定位资源所在服务器在互联网中的位置
80 端口 服务器监听不同web服务 web服务有不同端口。（现在默认80端口，直接通过域名访问)
path 路由 通过路由定位内容
urn 永久统一资源定位符 在资源移动后还能被找到

五、HTTP报文形式
1.关于请求报文
起始行：（首行不属于hearer）请求方法（post、get、put、delete）、url、协议版本
HEADER：传输的数据和内容格式（Accept）等等
2.响应报文
首行：http版本、code状态码、状态码的含义（比如200，则此处是ok）
header
body
HTTP方法： 用来定义对资源的操作
GET POST PUT DELETE 都有各自的语义（具体操作要自己如何使用）
HTTP Code：定义服务器对请求的处理结果 就是状态码，各个区间的状态码都有各自的语义，好的HTTP服务可以通过code判断结果。

六、创建一个最简单的web服务
在HTTP/server.js文件中
```js
const http =require('http')
http.createServer(function(request,response){
  console.log('request come',request.url)
  response.end('123')
}).listen(8888)
console.log('server lisening on 8888')
```
输入命令 node server.js可以得到
