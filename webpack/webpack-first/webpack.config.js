//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

module.exports = {
    devtool:'cheap-module-eval-source-map',//开发环境下使用
    mode:isDev ? 'development' : 'production',
    devServer:{
        port:'3000',//默认300端口
        quiet:false,//默认不启动
        inline:true,//默认开启inline模式，如果设置为false 开启iframe模式
        stats:"erroes-only",//终端仅打印error
        overlay: false ,//默认不启用
        clientLogLevel:"silent",//日志等级
        compress:true//是否启用gzip压缩
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"],
                        plugins:[
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs":3
                                }
                            ]
                        ]
                    }
                },
                exclude:/node_modules/ //排除nodule_modules目录
            }
        ]
    },
    plugins:[
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',//打包后的文件名
            config:config.template
            // minify:{
            //     removeAttributeQuotes:false ,//是否删除属性的双引号
            //     collapseWhitespace: false, //是否折叠空白
            // },
            //hash :true //是否加上hash 默认是false
        })
    ]
}