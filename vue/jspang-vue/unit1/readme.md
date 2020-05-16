# 内部指令
## v-if v-for v-show
**v-if**: 用来判断是否加载html的DOM.
比如一个用户的登录状态.一个isLogin属性，为true时显示，为false显示登录后请操作
```html
<div v-if="isLogin">你好 欢迎您</div>
<script>
data:{
    isLogin:false
}
</script>
```
**v-show**:调整display属性，DOM已经加载 只是CSS控制没有显示出来。
v-if/v-show的区别：
v-if：判断是否加载，可以减轻服务器的压力，在需要的时候加载。
v-show：调整css display的属性，可以使客户的操作更加流畅。
**v-for**：渲染一组data中的数组，需要使用item in items形式的语法，items是源数据数组并且item是数组元素迭代的别名。
```html
<div v-for="item in items">
{{item}}
</div>
<script>
var app=new Vue({
    el:'#app',
    dataL:{
        items:[2,5,4,9,3]
    }
})
</script>
```
先定义数组 然后再模板中循环输出 。
*排序*：将输出的结果排序输出。
利用computed 在输出item之前的一种编程。但是会遇到一个坑 就是根渲染不成功.同时要自己写一个方法（所有js代码都有这个问题）
```js
<div v-for="item in sortItems">
{{item}}
</div>
var app = new Vue({
    el:'#app',
    data:{
        items:[.....]
    },
    computed:{
    sortItems:function(){
        return this.items.sort(sortNumber);
    }
}
});
function sortNmuber(a,b){
    return a-b;
}
```
*对象循环*
定义一个数组且在模板中输出
<li v-for="student in students">
{{student,name}}-{{student.age}}
</li>
加入索引号
```js
function sortBykey(array,key){
    return array.sort(function(a,b){
        var x=a[key],
        var y=b[key],
        return ((x<y)?-1:(x>y)?1:0))
    })
}
```
computed进行排序
```js
sortStudent : function(){
    return sortByKey(this.student,'age');
}
```

## v-text/v-html
在html中用{{xxx}}的方式输出data值，但是在网速很慢或者JavaScript出错的时候，会暴露{{xxx}}。
```html
<span>{{ message }}</span>=<span v-text="message"></span><br/>
```
如果在JavaScript中有html标签 用v-text是显示不出的，要用v-html。
*注意：*动态渲染html很危险 XSS攻击。 只能在可信的内容上使用v-html。绝对不能在用户提交和可操作的页面攻击。

## v-on
v-on就是监听事件DOM来触发一些JavaScript代码。
编写一个加分程序
```html
<button v-on:click="jiafen">+</button>
methods:{
    jiafen:function(){
        this.count++;
    }
}
```
**v-on的简写@**
出来click 还可以键盘回车事件
<input type="text" v-on:keyup.enter="onEnter" v-model="secondCount"/> 

onEnter:function(){
    this.count = this.count+parsetInt(this.secondCount);
}

parsetInt() 整数转换
 
## v-model 
v-model绑定数据源 实现双向数据绑定
.lazy：取代 imput 监听 change 事件。
.number：输入字符串转为数字。
.trim：输入去掉首尾空格。

## v-bind
v-bind就是处理HTML中的标签属性
绑定imgSrc
```html
<div id="app">
    <img v-bind:src="imgSrc" width="200px">
</div>
data:{
    imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
     }
}
```

**v-bind的缩写**: v-bind:href--->:href
v-bind绑定css样式、class数组、绑定class使用三元表达式、

## 其他指令
v-pre：跳过vue的编译 直接输出原始值
<div v-pre> {{message}}</div>
v-cloak: 在vue渲染完指定的整个DOM后才进行显示，必须和css样式一起使用。
[v-cloak] {
  display: none;
}
<div v-cloak>
  {{ message }}
</div>
v-once：在第一次DOM进行渲染后就跳出以后的渲染的过程。
<div v-once>第一次绑定的值：{{message}}</div>
<div><input type="text" v-model="message"></div>