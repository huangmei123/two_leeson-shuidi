# react ts

在开发阶段：start：webpack-dev-server --mode development --inline  --hot --onpen
webpack负责编译，同时启动liv-server http服务
1. --hot 局部热更新(重新加载更新的部分)
--inline 刷新浏览器
2. babelrc presets env modules ?
3. dist/index.html 
4. hash 是我们的文件版本 
静态文件会缓存在浏览器里，
5. entry 多入口作用是？
entry 从某个文件require import webpack __require__
单点入口 组件起来一个依赖关系 
业务的经常变化 通知客户端更新 
把几个月 永远不更新的文件 作为独立的入口
entry 可以有多个打包的入口吗？为什么？
vender -库
提升了编译速度 同时保障及改善了用户的浏览体验。
