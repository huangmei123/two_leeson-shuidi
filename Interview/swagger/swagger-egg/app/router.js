// 提问：api是从哪里开始的？ 后端 router->api->controller
// 约定一个规则：数据格式 值 类型 完整性要先规定
module.exports = function(app){
    app.router.get('/','home.index');
}