- 考点：布局相关，多少种做法？
亮点：grid布局往往不够
在html里 九宫格三行三列
从浏览器布局的发展 ，grid布局可以帮我们快速解决，但是考虑到兼容性的问题，布局方案降级选择需要考虑flex自适应布局方案，通过flex：1也能完成任务。

作为盒子模型和float布局方案 ，结合特定的html结构，我们在传统低端浏览器中，也可以完美解决。
不过table display（九宫格）方案也可以尝试。

grid：
grid-template-columns/grid-template-rows 行列

- 布局的发展史
  BFC-->IFC-->FFC-->GFC

Block Formatting Context BFC 块级格式化上下文
Inline Formatting Context IFC 内联格式化上下文
Flex formating context FFC 自适应格式上下文
Grid formating context GFC 网路布局格式化上下文
