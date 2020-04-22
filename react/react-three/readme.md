# three.js
- wegl 3D渲染 canvas （游戏，直播，电商，地图）
在canvas里引入一个形状/材质 ，类似于一个camera screen
react+three.js 组件化开发 可视化应用

1. 写高质量代码，使用eslintrc驱动
- yarn add webpack-cli webpack-dev-server webpack -D
- yarn add babel-loader @babel/cli @babel/core @babel/preset-env
- yarn add eslint-loader eslint -D
- yarn add @babel/preset-react -D 
- yarn add html-webpack-plugin
- yarn add eslint-plugin-react -D
- yarn add babel-eslint -D
- yarn add eslint-plugin-html -D

2. .jsx->.tsx->webpack.config.js->awsome-typescript-loader->tsconfig.json jsx =>react
3. eslintrc基本支持 .babelrc 
4. 你对好代码时如何定义/考虑的？
- 代码风格
- 修炼 常用的数据结构、常用的算法、常见的设计模式
良好的代码风格时优秀代码的开始，是团队协作的开始
js的语法不严格，eslint来规范，
对于团队来说，编程风格是第一位。
  - 代码风格 eslint（检测代码，但是经常不分黑白报错）
  - 在57行 改成error /0 就不报错
  - 在33行  "quotes": ["warn", "single"],----->分号
  - "semi": ["error","never"],,---->引号
5. vue/react 新版本 ，在项目的时候使用 airbnb


