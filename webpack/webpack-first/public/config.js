// 除了以下配置还有很多 比如publicPath的路径等等。
module.exports = {
    dev:{
        template:{
            title:'你好',
            header:false,
            footer:false
        }
    },
    build:{
        template:{
            title:'再见',
            header:true,
            footer:false
        }
    }
}