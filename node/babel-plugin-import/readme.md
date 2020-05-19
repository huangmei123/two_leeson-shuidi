# babel插件
babel是个编译器
https://babeljs.io/docs/en/babel-types
paser -> transform -> generate
解析：把代码code --> AST(抽象语法树)
- 词法分析 ： 状态码 源码解析为一个个token
- 语法分析 ： html --> dom树 父子关系构造出来

举例： 我今天很高兴
词法分析：“我”、“今”、“天”、“高兴”
语法分析：（有意义的词不能分，强调整个语境）“我”、“今天”、
```js
<div>
 <p></p>
</div>
```


```js
//简单的抽象语法树
body:{
    while:{
        condition:true,
        statement:null
    }
    try:{
        var:{
            variable:'a',
            value:1
        }
        catch:{
            argument:err
        }
    }
}