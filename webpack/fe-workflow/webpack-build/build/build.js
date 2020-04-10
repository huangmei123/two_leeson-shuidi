const rimraf =require ('rimraf');
const path = require('path');
const  ora = require('ora');//加载指示器
const chalk = require('chalk');
// 用webpack完成最基本的entry output mod
// webpack-chain把配置成为编程的过程
// console.log(process.cwd(),__dirname)
//dist在项目的根目录下，

const config = require('./base')();
// console.log(config);
const webpack = require('webpack');

rimraf.sync(path.join(process.cwd(),'dist'))
const spinner = ora('开始构建项目...');

spinner.start();
//进行编译
webpack(config.toConfig(),function(err,stats){
    spinner.stop();
    if(err) return err;
    process.stdout.write(
        stats.toString({
            colors:true,
            modules:false,
            children:false,
            chunks:false,
            chunkModules:false
        }) +'\n\n')
    console.log(chalk.cyan('build完成\n'));
})

