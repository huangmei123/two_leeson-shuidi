- 如果微博有新的头条或者评论 如何去得到？

http 是一个会断开连接的 简单请求

# websocket  网络通信协议
是web端的socket，基于点对点之间的 可以tcp持久化，
可以进行服务器端push 主动向客户端发送消息。
为什么需要websocket？因为 HTTP 协议有一个缺陷：通信只能由客户端发起。
websocket的特点：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。只需要一次握手。

A     B     2个用户  websocker
A  管  B => A发一个消息给B 一个发送消息接受信息的感觉
Electron 远程控制系统 
http://www.websocket-test.com/  测试websocket 输入 ws://127.0.0.1:8010连接