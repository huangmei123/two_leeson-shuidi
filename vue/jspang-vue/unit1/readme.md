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