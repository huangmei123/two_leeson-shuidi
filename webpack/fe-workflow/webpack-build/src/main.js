// console.log('hhhhhhhh')
// 2 引入css文件 webpack bundle一切静态资源
//1 const es6 -》 es5  env
// require('./style/index.css')
const h2 = document.createElement('h2');
h2.innerText = "testaaa";
h2.class = 'test';
//3 挂载点 html template
document.body.append(h2);