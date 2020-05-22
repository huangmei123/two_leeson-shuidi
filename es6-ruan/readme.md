# 历史：
1996年 Netscape公司提交javascript ，次年ECMA发布262号文件的第一版 规定了浏览器脚本语言的标准 并将其成为ECMAScript 就是1.0版。但是不叫javascript的原因有2：1是商标 授权协议 2是体现这门语言的制造者是ECMA 利于保护语言的开放性和中立性

**ECMAScript JavaScript 前者是后者的规格 ，后者是前者的一种实现。**

- 关于ES6 和 ECMAScript2015 的关系
ES6的第一个版本是2015年6月发布的 正式名称ES2015.
2016年6月发布的 ES2016,可以看作是ES6.1版。
2017年6月发布的 ES2017,
ES6 是一个历史名词 泛指 含义是5.1版以后的javascript的下一代标准，涵盖ES2015 、ES2016、ES2017等等 。这里的ES6 指的是ES2015标准，也指下一代JavaScript语言。

- ECMAScript的历史
ES6从开始制定到最后发布 整整用来15年。
ES6的起点是2000年
Node.js是JavaScript的服务器运行环境，它对ES6的支持度更高。
除了默认打开的功能 还有一些语法功能已经实现了 但是默认没有打开，使用以下命令打开：
// Linux & Mac
$ node --v8-options | grep harmony
// Windows
$ node --v8-options | findstr harmony

- Babel转码器
可以将es6代码转为es5 ，从而在老版本浏览器执行。
举例：
// 转码前
input.map(item => item + 1);
// 转码后
input.map(function (item) {
  return item + 1;
});
安装babel 
$ npm install --save-dev @babel/core
Babel的配置文件是.babelrc 存放在根目录下，要使用babel就要配置它。
基本格式：
{
  "presets":[  ],
  "plugins": [  ]
}
presets : 设定转码规则 规则集如下：
 最新的转码规则
$ npm install --save-dev @babel/preset-env
react转码规则：
$ npm install --save-dev @babel/preset-react
写入到.babelrc
{
    “presets": [  
         "@babel/env",
         "@babel/preset-react"
       ],
      "plugins"  :  [  ]
}

- babel的命令行转码
命令行工具 @babel/cli ：npm install --save-dev @babel/cli
基本用法：
转码结果输出到标准输出： npx babel example.js
转码结果写入一个文件： npx babel example.js --out-file compiled.js 
                            或者：npx babel example.js -o compiled.js
整个目录转码：    npx babel src --out-dir lib
              或者：npx babel src -d lib
-s参数生成source map文件： npx babel src -d lib -s

- babel-node
@babel/node模块支持babel-node命令 提供一个支持ES6的REPL环境。支持这个环境下的所有功能。
安装： npm install --save-dev @babel/node
执行就可以进入到这个环境： npx bable-node
它也可以直接运行ES6脚本：console.log(x => x*2(1));
                                           npx babel-node es6.js 结果输出2

- @babel/register模块
改写require命令 ，为他加上一个钩子 。之后每次用require加载  .js  .jsx  .es  .es6后缀的文件 就会吸纳用Babel进行转码。
使用前 要加载
// index.js
require('@babel/register');
require('./es6.js');
注意：@babel/register只对require命令加载的文件转码，不会对当前文件进行转码，实时转码 适合开发环境使用。

- polyfill
Babel不转新的API，比如：Interator 、Generator 、 Set、 Map、 Proxy、 Reflect、 Symbol 、Promise等全局变量，以及全局变量上的方法（Object.assign)
以Array.from方法举例，可以使用 core-js 和 regeneratro-runtime（提供generator函数的转码）
安装命令：
$ npm install --save-dev core-js regenerator-runtime
引入：
import 'core-js';
import 'regenerator-runtime/runtime';
// 或者
require('core-js');
require('regenerator-runtime/runtime);
还有很多……..
https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/runtime-corejs3-definitions.js

- 浏览器环境 
@babel/standalone 模块提供的浏览器版本。
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
// Your ES6 code
</script>
但是网页转码 会对性能有些影响。
babel有一个REPL在线编辑器 将es6转为es5
https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.9.6&externalPlugins=
