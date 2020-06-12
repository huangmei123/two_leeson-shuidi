vue源码
vnode-->diff算法 优化的关键
- vue架构
h 虚拟系欸但的生成
1. 可以良好的表达模板结构 html->json
2. 抽象能力（html标签，组件（StateFullCompoent FunctionalComponent Portal ...），便于代码的执行，
3. 虚拟节点VNode 要有利于patch diff算法，