# GraphQL 
是一种面向数据的 API 查询风格。

- 这个url设计的科学吗？
文章posts 查看某一篇 /posts/show/1
RESTFul url不要有动词
不科学，/post/1 因为RESTFul 是后端暴露资源的解决方案 对年来一直受追捧

1. HTTP动词 GET/POST/DELETE/PATCH/PUT...
2. 每一个URL 代表一种资源 posts/1 
3. 客服端通过http动词 对服务器资源进行操作 实现表现层状态转化
设计一个url 网上汇款 从账户1向账户2汇款500元，资源是什么？发生了什么改变
/transfer 动词
/account（账户）/1/transfer/500/2
  - 将动词转变为名词 transfer--> transaction
  - 交易 -> website 独立的模块 HTTP 1.1
  - POST 状态转化 from=1&to=2&mount=500.00  req body

在近几年来RESTFul被前端新的理念革命了， **Graphql** 可以让前端更好的使用及定义数据接口
Apollo 不能浪费数据 数据格式更加严谨
vuex->api（替换成 Graphql来定义api）-> mockjs-> server  RESRFul
restful使用谓语动词 ，比较受后端的影响大控制大 
Graphql让前端对数据接口有了更大的话语权，