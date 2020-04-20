react + ts + hooks
理解typescript配置文件

1. sourcemap
2. --inline
3. polyfill
4. css处理
5. react新特性带来的fragment
react/vue 开发 ，就是/dist目录，交给后端或者docker nginx服务代理

js的责任由babel
npm i @babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev
https://cdn.bootcss.com/js-polyfills/0.1.42/polyfill.js

## polyfill --save-dev
fill 填充  poly一些特性
两种功劳：1.babel-preset-env + babel-core 降级处理
2.polyfill把一些无法降级Promise或者数组里的map方法、reduce方法，手工的实现一下，手动的添加script src = polyfill.js
垫片 原来没有的垫上去，补全它
在实现polfill之前做判断，不是要给所有的浏览器都做同样的补丁，
- 在为polyfill添加之前，先判断浏览器是否拥有此功能？
if (typeof Object.creat !=="function){}
把polyfill.js打包到bundle.js之中， babel preset target

## inline和hot区别：
inline：表示i强制刷新，弊端是mvvm状态会丢失
hot：是针对hmr （hot module reload）热更新，不会丢失状态
如果是hmr 部分由更新 hot
如果不是hmr部分，使用inline强制刷新。


## 关于css
1. css如何从style变成.css输出？？
 {
        test: /\.css$/,
        //为css压缩的独自编译做准备
        use: [MiniCssExtractPlugin.loader,"css-loader"]
      },
 MiniCssExtractPlugin是一个插件
2. 编译时css要压缩
3. 如何编译刚刚的bug（因为刚刚的color是随意定的值）
style-loader开发的时候
webpack帮我们定位错误 点一下就能跳到错误的源码所在行

