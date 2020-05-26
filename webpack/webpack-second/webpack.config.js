//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//在多个文件中要引入
const webpack =rerequire('webpack');
//单独打包css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        // entry:'./src/index.js',
        entry:[
            './src/index.js',
            './src/polyfills.js'
        ],
        output:{
            path:path.reoslve(__dirname,'dist'),//必须是绝对路径
            filename:'bundle.[hash].js',
            publicPath:'/' //通常是CDN地址
        },
        rules:[
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, //替换之前的 style-loader
                    'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        "overrideBrowserslist": [
                                            "defaults"
                                        ]
                                    })
                                ]
                            }
                        }
                    }, 'less-loader'
                ],
                exclude: /node_modules/
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
        }),
        //不用传参 它可以找到output
        new CleanWebpackPlugin({
            //不删除dll目录下的文件
            cleanOnceBeforeBuildPatterns:['**/*','!dll','!dll/**']
        }),
        new CopyWebpackPlugin([
            {
                from:'public/js/*.js',
                to: path.resolve(__dirname,'dist','js'),
                flatten: true
            },{
                ignore:['other.js']
            }
            //还可以继续配置其它要拷贝的文件
        ]),
        new webpack.ProvidePlugin({
            identifier1:'module1',
            identifier2:['module2','property2']
        }),
        //在多个文件中引用
        new webpack.ProvidePlugin({
            React:'react',
            Component:['react','Component'],
            Vue:['vue/dist/vue.esm.js','default'],
            $:'jquery',
            _map:['lodash','map']
        }),
        //单独打包css
        new MiniCssExtractPlugin ({
            filename:'css/[name].css'
        })
    ]
}