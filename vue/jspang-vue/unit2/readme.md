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