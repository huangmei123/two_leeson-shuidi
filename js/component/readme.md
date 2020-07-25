上层： swiper、pullDown

手势：
tap 点
pan 滑动
flick 快速滑动
press 长按

## fastclick
移动端 click 有300ms延迟
移动需要click DoubleClick

## 原理
 浏览器原生处理事件的顺序：touchStart touchMove touchEnd 300ms click
 阻止原生效果：在touchend后面添加preventDefault（）。click事件就不会发生