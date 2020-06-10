了解：
	1. 浏览器用流失布局模型（FBL)
	2. 浏览器把HTML解析DOM，css解析cssom，DOM盒cssom合并产生了Render Tree。
	3. 有Render Tree ,知道节点的样式，然后计算在页面的大小盒位置，最后把节点绘制到页面上
	4. 对Render Tree的计算通常时遍历一遍，但是table和其他元素除外，就会计算多次。
总结： 回流必将引起重绘，重绘不一定会引起回流。

回流
当Render Tree中部分或者全部元素的尺寸、结构、或某些属性发生变化时，浏览器会重新渲染部分或者全部文档的过程叫做回流。
会导致回流的操作：
1.页面首次渲染
2.浏览器窗口大小发生变化
3.元素尺寸或者位置发生改变
4.元素内容变化（文字数量或图片大小等等）
5.元素字体大小
6.添加或者删除可见的DOM元素
7.激活css伪类（：hover）
8.查询某些属性或者调用某些方法
一些导致回流的属性和方法：



重绘当页面元素样式的改变并不影响它在文档流中的位置时，（例如：color、background-color、visibility），浏览器会将新样式赋予给元素并重新绘制它。
关于性能
回流比重绘的代价更高
有时候回流一个单一的元素，它的父元素以及其他元素也会随着产生回流。
优化方式
浏览器维护一个队列，把所有能引起回流和重绘的操作放入队列中，如果队列的任务数量或者事件达到一个值，就会清空队列，进行一次批处理，这样可以把多次回流和重绘变成一次。
• clientWidth、clientHeight、clientTop、clientLeft
• offsetWidth、offsetHeight、offsetTop、offsetLeft
• scrollWidth、scrollHeight、scrollTop、scrollLeft
• width、height
• getComputedStyle()
• getBoundingClientRect()
因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。

如何避免
css
	1. 避免使用table布局
	2. 尽可能在DOM树的最末端改变class
	3. 比卖你设置多层内敛样式
	4. 将动画效果应用到position属性为absolute或fixed元素上
	5. 避免使用css表达式
JavaScript
	1. 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性
	2. 避免频繁操作dom，创建一个documentFragment，在里面操作所有的dom操作，最后再把它添加到文档中。
	3. 可以先设置display：none，操作结束再显示出来。
	4. 避免频繁读取引起回流/重绘的属性，如果要多次使用，就用一个变量缓存起来。
	5. 对具有复杂动画的元素使用绝对定位，使它脱离文档流。
	

