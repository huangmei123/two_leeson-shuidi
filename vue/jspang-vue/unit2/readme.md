# 全局API
构造器外部用Vue提供给我们的API函数来定义新的功能
## Vue.directive自定义指令
写好基本的功能，定义一个全局指令。
```js
Vue.directive('jspang',function(el,binding,vnode){
        el.style = 'color:'+binding.value;
    })
```
传递的三个参数：
el：指令绑定的元素 可以用来直接操作DOM。<div v-jspang="color" id="demo">{{num}}</div>
binding：一个对象 包含很多信息
vnode： Vue编译生成的虚拟节点
**自定义指令的生命周期**
1. bind 只调用一次 指令第一次绑定到元素时调用。可以定义一个绑定时执行一次的初始化动作。
2. inserted：绑定元素插入到父节点时调用
3. update： 更新时调用 
4. componentUpdated： 更新完成时
5. unbind： 指令和元素解绑时

## Vue.extend构造器的延伸
扩展实例构造器 预设了部分vue实例构造器。经常用来服务于Vue.component用来生成组件 
场景：在博客页面多处显示作者的网名 且在网名上直接由链接地址。
在html直接写<author></author>，但是这样没有传递任何参数 只是一个静态标签。
所以要使用Vue.extend。
```html
<div><author></author></div>
```
```js
var authorExtend = Vue.extend({
    template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
    data:function(){
    return{
          authorName:'JSPang',
          authorUrl:'http://www.jspang.com'
          }
    }
});
```
同时还要**挂载**
```js
new authorExtend().$mount('author')
```
还可以通过HTML标签的id或者class来生成扩展实例构造器，extend里都是一样的 只是挂载的方式不一样。
```js
new authorExtend().$mount('#author')
```


