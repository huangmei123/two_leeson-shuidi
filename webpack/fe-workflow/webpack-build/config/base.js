module.exports=()=>{
    console.log('在这里做基本配置吧');
    config
      .entry('app')
        .add(resolve('src/main.js')) //物理路径
        .end()
      .set('mode',process.env.NODE_ENV)
      .output
        .path(resolve('dist'))
        .filename('[name].bundle.js')
}