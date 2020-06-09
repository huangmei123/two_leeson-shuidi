回顾历史： 布局的传统办法：基于盒模型，依赖于display属性 + position属性 + float属性，对于一些特殊的布局非常不方便，比如垂直居中。在2009年w3c提出flex布局 可以简便、完整、响应式地实现各种页面布局。
一、flex布局是啥？
fiexible box地缩写，弹性布局。
容器可以使用： .box { display : flex }
行内元素可以使用： .box { display:inline-flex; }
webki内核的浏览器，要加前缀： .box { display: -webkit-flex ; display : flex ; }
注意： 使用flex 子元素的float、clear、vertical-align属性失效。

二、基本概念
使用flex布局的元素 简称 “容器”；它所有的i子元素自动成为容器成员，简称“项目”。



屏幕剪辑的捕获时间: 2020/6/9 8:10

三、容器的属性
6个容器属性：
	- flex-direction
	- flex-wrap
	- flex-flow
	- justify-content
	- align-items
	- align-content
	
3.1 flex-direction：决定主轴方向（项目的排列方向）
.box{
flex-diretion : row (从下到上） | row-reverse | column (从左到右） | column-reverse ;

3.2  flex-wrap:如果一条轴线排不下，如何换行。
. box {
flex-wrap : nowrap (不换行） |  wrap (换行，第一行在上面） |  wrap-reverse (换行，第一行在下面）

3.3 flex-flow
它是flex-direction属性盒flex-wrap的简写，默认值是row nowrap。
flex-flow ：<flex-direction> || <flex-wrap>

3.4 justify - content 属性
定义项目在主轴上的对齐方式。
.  box{
justify-content: flex-start | flex-end | center | space-between | space-around;
}
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

3.5 align-items属性
定义项目在交叉轴上如何对齐
. box { align-items : flex-start | flex-end | center | baseline | stretch }
flex-start ： 交叉轴的起点对齐（上端对齐）
flex-end ： 交叉轴的终点对齐 （下端对齐）
centent ： 交叉轴中点对齐
baseline ： 项目第一行文字的极限对齐。
stretch （默认值） ： 如果没设置auto，就将占满整个容器的高度。

3.6 align-content属性
这个属性定义了很多轴线的对齐方式，如果项目只有一个轴线 则该属性不起作用。
.box { align-content : flex-start | flex-end | center | space-between | space-around | stretch }
flex-start ： 与交叉轴起点对齐
flex-end ： 终点对齐
center： 中点对齐
space-between ： 两端对齐，间隔平均
space-around ： 上下一样，中间比两侧间隔大一倍
stretch ：轴线占满整个交叉轴。

四、项目属性
order 、 flex-grow、flex-shrink、flex-basis、flex 、align-self
4.1 order属性
定义项目的排列顺序。数值越小1，排列越靠前，默认值为0；
.item { order : < interger> ;}

4.2 flex-grow属性
定义项目的放大比例，默认值为0，即如果存在的剩余空间，也不放大。
.item { flex-grow :<number>; }



4.3 flex-shrink属性
定义了项目缩小的比例。默认值为1，即如果空间不足，该项目将缩小。
.item { flex-shrink :<number>;
如果所有项目的flex-shrink属性都为1.当空间不足时，都将等比例缩小。
如果一个项目的flec-shrink属性为0，其他的为1，则空间不足时，前者不缩小。
注意：负值对该属性无效。

4.4 flex-basis属性
定义了在分配多余空间之前，项目占据的主轴空间（main size）。
浏览器根据这个属性，计算主轴是否右多余空间。默认值为auto（就是项目本来的大小）。
.item { flex-basis : <length> | auto ;}
可以设为跟width或者height属性一样的值（350px），则项目将占据固定空间。

4.5 flex属性
是flex-grow、flex-shrink 和 flex-basis的简写。默认值： 0 1 auto。后2个属性可以选。
.item { flex-none | [ < 'flex-grow'>  ,  < 'flex-shrink'> ?  || < 'flex-basis' > ]
有2个快捷属性： auto （ 1 1 auto ) 和 none （ 0 0 auto）。

4.6 align-self 属性
它允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
.item { align-self : auto | flex-start | flex-end | center | baseline | stretch ;}
除了auto，其他都和align-litems属性一样。
