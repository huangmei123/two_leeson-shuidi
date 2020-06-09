BFC ：块级格式化上下文。
## 盒模型
盒模型定义了一个矩形盒子，当我们要对文档进行布局时，浏览器的渲染引擎就会根据盒模型，将所有的元素表示成为一个个矩形盒子，盒子的外观由css决定。
一个标准的盒模型由四个部分组成 ，由内到外：内容 -->内边距-->边框-->外边距
平常css设置的只是内容区域的宽高。内容区域包含（width、min-width、max-width height、min-height、max-height）
## 视觉模式化模型
定义了盒子（块级盒、行内盒、匿名盒）生成的计算规则，通过规则将文档元素转换为一个个盒子。
它的计算取决于一个矩形的边界，这个边界就是包含块
比如：
<table>
  <tr>
    <td></td>
  </tr>
</table>
table和tr都是包含块。
盒子不受包含块的限制，当盒子的布局跑到包含块的外面时，就是我们说的溢出。
块级元素：css属性值display为block、list-item、table的元素。
块级盒：具有以下特性
	- css属性值display为block、list-item、table时，它就是块级元素
	- 视觉上 块级盒呈现出竖直排列的块
	- 每个块级盒都会参与BFC的创建
	- 每个块级元素都会至少生成一个块级盒，成为主块级盒；一些会成为额外的块级盒，比如<li>
行内级元素：css属性值display为block、list-item、table的元素。
行内盒
匿名盒：不能被css选择器选中的盒子
比如：
<div>
  匿名盒1
  <p> 块盒</p>
匿名盒2
</div>
div 和 p 都会生成块级盒 ，p前后会生成2个匿名盒。
匿名盒所有可继承的css属性值都为inherit ，不可继承的initial。

## 定位方案
- 普通流
1.是浏览器默认的html布局方式，不对页面做任何布局控制。
2.触发：position：static/relative 同时 float：none
3.特性
	- 盒子一个接一个
	- 在BFC中 盒子竖着排；在IFC中，盒子横着排
	- position：static，盒子位置就是普通流布局
	- position：relative，盒子偏移由top 、right、bottom、left定义。
- 浮动：脱离文档流，浮动到当前行的开头或者结尾，普通流会围绕浮动盒周围（除了设置clear属性）

## 定位技术
* 静态定位：就是默认的，position为static。处于普通流
* 相对定位：position：relative。
	- 可以设置top、 right、bottom、left对位置进行微调。设置相对于自身的偏移量
* 绝对定位：盒会从普通流中脱离。
	- position：absolute/fixed
	- 可以设置top、 right、bottom、left对位置进行微调。设置相对于包含块的偏移量。
* 固定定位：
	- 和绝对定位类似，唯一的区别在于，包含块的浏览器视窗

## 块级格式化上下文（BFC)
	1. 用于决定块级盒的布局及浮动相互影响范围的一个区域。
	2. 以下元素会创建 BFC：
	• 根元素（<html>）
	• 浮动元素（float 不为 none）
	• 绝对定位元素（position 为 absolute 或 fixed）
	• 表格的标题和单元格（display 为 table-caption，table-cell）
	• 匿名表格单元格元素（display 为 table 或 inline-table）
	• 行内块元素（display 为 inline-block）
	• overflow 的值不为 visible 的元素
	• 弹性元素（display 为 flex 或 inline-flex 的元素的直接子元素）
	• 网格元素（display 为 grid 或 inline-grid 的元素的直接子元素）
以上是 CSS2.1 规范定义的 BFC 触发方式，在最新的 CSS3 规范中，弹性元素和网格元素会创建 F(Flex)FC 和 G(Grid)FC。
	3. 范围：子元素如果又创建了一个新的BFC，那么它里面的内容就不属于上一个BFC了，体现了BFC隔离的思想。
举例：
<table>
  <tr>
    <td></td>
  </tr>
</table>
加入table元素和tr元素创建的BFC分别记为BFC_table和BFC_tr
范围：BFC_tr： td元素
           BFC_table：只有tr元素。不包括tr里的td元素。
一个元素不能同时存在于两个BFC中。
		4. 特性：
	- 内部的块级盒在垂直方向上一个接一个
	- 同一BFC的相邻块级元素可能发生外边距折叠。创建新的BFC可以避免外边距折叠
	- 浮动盒的区域不会盒bfc重叠
	- 计算BFC高度时，浮动元素也会参与计算特性
5.BFC的应用
	- 自适应多栏布局
	- 防止外边距折叠
	- 清楚浮动
