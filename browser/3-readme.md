# http请求流程：站点二次打开速度很快


HTTP协议时建立在TCP连接基础之上的。
HTTP是一种允许浏览器向服务器获取资源的协议，是web的基础，通常由浏览器发出请求 用来获取不同类型的文件 例如：HTML文件、CSS文件、JavaScript文件、图片、视频等。
* 场景提问：第一次访问站点的时候速度很慢 再次访问速度很快？
登录过一个网站 下次访问就是登录状态了？
## 1.浏览器发起HTTP请求流程
输入一个网站地址：http://time.geekbang.org/index.html
（1）构建请求
浏览器构建请求行信息 **GET /index.html HTTP1.1** , 构建好就发出网络请求。
（2）查找缓存
发出网络请求之前 ，先在浏览器缓存中查询是否有要请求的文件。
浏览器缓存 是一种在本地保存资源副本，以供下次请求时直接使用的技术。
如果请求的资源有副本 就会拦截请求返回副本，并直接结束请求，不会去重新下载。这样的好处：a、缓解服务器端压力，提升性能（获取资源的耗时变短）b、对于网站来说 缓存时实现快速资源加载的重要组成部分。
（3） 准备IP地址和端口
浏览器使用HTTP协议（作为应用层协议），用来封装请求的文本信息；
并使用TCP/IP协议（作为传输层协议）将它发到网络上。
在HTTP工作之前 浏览器就要建立TCP和服务器连接。
HTTP的内容是通过TCP的传输数据阶段来实现的。

TCP的建立连接=IP地址+端口号。
IP地址：都是数字标识很难记忆---->延伸出域名，DNS（域名系统，负责把域名和IP地址做一一映射关系）
端口号：如果URL没有特别指明端口号 HTTP协议默认端口是80端口。
（4）.等待TCP队列
IP地址和端口号都有了 依然不能建立连接。因为chrome有一个机制 同一个域名同时最多只能建立6个TCP连接 ，如果有10个请求 那么其中4个会进入排队等待状态，直到进行中的请求完成。
（5）.建立TCP连接
三次握手
（6）.发送HTTP请求
浏览器发送请求信息给服务器。

a、发送请求行：请求方法、 请求url 、HTTP版本协议
就是告诉服务器，我浏览器需要什么资源，最常用的是GET，还有一种POST（用于发送一些数据给服务器，登录…),如果用POST方法，那么浏览器还要准备数据给服务器，这里的数据是通过请求体来发送。
b、请求头：告诉浏览器的一些基础信息，比如浏览器所用的操作系统 、浏览器内核等，当前请求的域名信息、浏览器的cookie信息。

## 2、服务器端处理HTTP请求流程
当HTTP的请求信息送达服务器时，服务器就会准备相应的措施了
（1）返回请求
服务器处理结束 通过工具软件curl来查看返回请求数据，输入：
curl -i  https://time.geekbang.org/
-i   是为了返回响应行 响应头 响应体的数据

a、不是所有的请求都可以被服务器处理的，一些无法处理或者处理出错的信息 服务器会通过请求行的状态码来告诉浏览器处理它的处理结果：
状态码200 表示处理成功
状态码404 表示没有找到页面
b、响应头 ： 包含服务器生成返回数据的时间，返回的数据类型（JSON、HTML、流媒体等），服务器要在客户端保存的cookie等信息。
（2）断开连接
一旦返回了请求信息 就要关闭TCP连接 。但是如果浏览器或者服务器在头信息加入 **Connection:Keep-Alive**, TCP就会继续保持打开的状态，这样也会提升资源加载速度。（比如 :一个web页面中内嵌的图片来自一个站点 复用连接就）
（3）重定向
在浏览器输入geekbang.org，发现两个url不一样，因为涉及到了一个重定向的操作，控制台输入 curl -I geekbang.org
-I 与之前的不一样 ，-I表示只需要获取响应头和响应行数据，而不需要获取响应体的数据。返回的数据如下：
状态码301 就是告诉浏览器我需要重定向到另一个网址，而重定向的网址包含在响应头的Location字段中。

## 解答1：为什么站点第二次打开会更快？
	- 因为第一次加载页面过程中 缓存了一些耗时的数据到本地，浏览器直接使用本地的副本来回应请求。
DNS缓存和页面资源缓存这2块数据会被浏览器缓存。
	- 浏览器是通过响应头中的 **Cache-Control**字段来设置是否缓存该资源。通常设置一个缓存期时长 ，由Cache-Control的Max-age参数来设置。
	- 缓存过期，浏览器会继续发送网络请求，并且在HTTP请求头中带上**If-None-Match:"4f80f-13c-3a1xb12a"
	服务器根据If-None-Match来判断请求的资源是否由更新。
	a、更新，服务器就会直接返回最新的资源给浏览器
	b、没有更新 就返回304状态码，等于告诉浏览器这个缓存可以继续使用，就不重复发你了。
	
#3 解答2 ：登录状态时如何保持的？
1.用户打开页面-->输入用户名和密码--->点击按钮触发页面脚本生成用户登录信息---->调用POST方法提交用户登录信息给服务器
2.服务器接收到浏览器提交的信息--->查询后台是否登录信息正确----->正确则时生成一段用户身份的字符串----->将这个字符串写到响应头的**Set-Cookie** ---->将响应头发送给浏览器。
3.浏览器解析Set-Cookie字段，浏览器把这个字段保存到本地
4.用户再次访问，浏览器读取之前保存的Cookie数据 ，并把数据写到请求头的Cookie字段中----> 把请求头给服务器
5.服务器接收到以后，查找Cookie字段，对比后台，判断该用户为登录状态---->生成含有该用户信息的页面数据----->将生成的数据发送给浏览器
6.浏览器接收到用户的页面信息 展示用户的登录状态信息。
简单：如果服务器发送的响应头有Set-Cookie字段，浏览器就把这个字段保存到本地，下次客户端往该服务器发送请求时 客户端会自动在请求头之中加入Cookie值再发送出去。服务器发现客户端发过来的Cookie，检查哪个客户端发过来的连接请求，然后对比服务器的记录，最后得到用户状态信息。


## 思考题：如果一个页面的网络加载时间太长了，如何分析是卡在哪一个阶段的？
1.最有可能的地方 网络传输丢包比较严重 需要不断重传，然后通过ping curl看看对应的时延高不高
2.通过wireshake看看哪里出问题
wireshake是一个网络封包分析软件，功能是撷取网络封包，尽可能地显示出最为详细地网络封包资料，它直接使用winPCAP作为接口，直接与网卡进行数据报文交换。在以前，这种软件很贵，Ethereal的出现改变了。
3.如果别人的很快 自己的很慢 看看自己客户端是否有问题。