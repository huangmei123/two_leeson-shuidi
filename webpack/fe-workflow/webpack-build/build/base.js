//负责最基本的工作
const {findSync} = require('../lib');
const Config = require('webpack-chain');//负责配置
const config = new Config();//配置实例
const path = require('path');
const resolve = src =>{
    return path.join(process.cwd(),src)
}
const files = findSync('config');
console.log(files,'++++++++++++++')

module.exports= () =>{
  const map = new Map();  //key 不限类型json只能用string做key
  files.map (file =>{
    const name = file.split('\/').pop().replace('.js','');
    console.log(name,'--------------')
    return map.set(name,require(file)(config,resolve));
  })
    console.log(map,'map-------------')

    map.forEach(v => v())
    return config;
}