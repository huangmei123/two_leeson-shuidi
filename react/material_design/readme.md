# material_design来自谷歌Google的UI风格
苹果UI最受欢迎 拟物设计-》扁平化设计
安卓material_design

从css风格 到 组件化 到 react入门
stylus -w index.styl -o index.css

- material_design灵魂在于对交互的创新 按钮的波浪感 进度条的进度感
移动端的细节
cursor pointer /*粘手*/
user-select none
stylus 嵌入式::after 、:active::after
通过背景制作background-img
1. background-image 10%白 1%透明
背景图片 url 引入的方式 在移动时代 渐变也可以生成
即生成了背景 同时又没有图片

使用img 通过radial-gradient画了一个背景，这个背景 10%的螺旋丸，慢慢变大。

- 一堆按钮
  为开发做准备好基础组件 小程序里勇敢组件要用的按钮 
  提供通用的 变通的各种常见要求就叫组件。
  组件**可以复用**
  封装css(有些变化）状态 primary circle html

- ReactDOM 就是Raect与DOM交互的库
基本语法：
组件时强大的，定义了一个Button组件 在type文字、block。。有通用性的需求
1. ReactDOM.render(，document.getElementById') 组件编译