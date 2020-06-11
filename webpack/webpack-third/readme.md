对比工具：speed-measure-webpack-plugin，检测各个插件和loader所花费的时间，使用简单，直接包裹webpack。
在webpack.config.js中
const SpeedMeasurePlugin = require（“speed-measure-webpack-plugin”）；
const smp = new SpeedMeasurePlugin( );
const config = {
//webpage的配置
}
module.exports = smp.wrap(config);

	1. exclude/include
确保转移尽可能少的文件。exclude指定要排除的文件，include要包含的文件。exclude优于include，都要使用绝对路径数组。尽量避免使用exclude，更倾向于included。
rules：[
  {….include:[path.resolve(__dirname,'src)] }
]

	2. cache-loader
性能开销大的loader之前添加cache-loader，将结果缓存到磁盘中。默认保存到node_modules/.cache/cache-loader。
	- 安装 yarn add cache-loader -D
	- 使用：放到其他loader之前，修改webpack的配置。
举例：babel-loader耗时长，配置了cache-loader
modules: {
rules:[
{ test: /\.jsx?$/, use:[ 'cache-loader','babel-loader']  }
] }
如果只要给bable-loader配置，也可以直接给bable-loader怎该cacheDirectory
	3. happypack
构建市文件读写和计算机密集型的操作，文件数量多就会使构建速度慢。如何让webpack同一时刻处理多个任务，发挥多核CUP的威力，以提升构建速度呢？
happypack 可以把任务分解给多个子进程去并发的执行，子进程处理完再把结果发送给主进程。
	- 安装 yarn add happypack -D
	- 修改webpack.config.js
	const Happypack = require('happypack');
	modules.exports={
	…
	rules:[ 
	  { test : /\.js[x]?$,
	    use: 'Happypack/loader?id=css' ,
	    inculde: [ path.resolve(__dirname,'src'),
	    path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist')],
	}
      ],
         plugins:[
           new Happypack ({ 
 id: 'js', //和rule中的id=js对应
            //将之前 rule 中的 loader 在此配置
            use: ['babel-loader'] //必须是数组
        }),
        new Happypack({
            id: 'css',//和rule中的id=css对应
            use: ['style-loader', 'css-loader','postcss-loader'],
        })
    ]

happypack默认开启(CPU核数-1）个进程，也可以传递threads给Happypack。
当postcss-loader配置在Happypack，必须在项目中创建postcss.config.js。
否则会抛出错误。
注意：在项目不复杂的时候不要配置Happypack，因为进程的分配核管理也需要时间。
	4. thread-loader
放置在其他loader之前，其他loader就会在一个单独的worker池中进行。但是会受到限制：不能产生新文件、不能使用定制的loaderAPI，无法获取webpack的选项设置。
	- 安装 yarn add htread-loader -D
	- 修改配置
rules: [
{ test: /\.js?$/,  use: [ ' thread-loader','cache-loader','babel-loader']}
]
	5. 开启js多进程压缩
webpack默认使用TerserWebpackPlugin，默认就开启了多进程的缓存，一般在目录node_modules/.cache/terser-webpack-plugin。
	6. HardSourceWebpackPlugin
它为模块提供中间缓存，缓存默认的存放路径是：node_modules/.cache/hard-source
配置hard-source-webpack-plugin，首次构建时间没有变化，但是第二次构建就会节约80%。
	- 安装 yarn add hard-source-webpack-plugin -D
	- 修改配置
	var HardSourceWebpackPlugin = require('hard-source-webpack-plugin'),
	modules.exports = {
	…
	plugins:[
	   new HardSourceWebpackPlugin ()
	]  }
可能遇到：热更新、某些配置不生效。
	7. noParse
如果一些第三方模块没有AMD/CommonJS规范版本，可以使用noParse来标识这个模块，这样webpack会引入这些模块，但是不进行转化和解析，从而提升构建性能。
noParse的属性是一个正则表达式或者是一个function
modules.exports ={
module:{ noParse: /juery|lodash/ }  }

	8. resolve
	9. lgnorePlugin
作用：忽略第三方指定目录。
例如在moment会将所有本地化内容和核心功能一起打包，我们就可以使用IgnorePlugin在打包时忽略本地化内容。
modules.export ={ 
plugins: [ new webpack.IgnorePlugin( /^\.\/locale$/,/moment$/)
]
}
	10. externals
可以将一些js为念存储在CDN上（减少webpack打包出来的js体积），在index.html中通过<script>标签引入。
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
如果要使用，仍然可以通过import的方式去引用（如 import $ from 'jquery' ) 并且webpack不会对其进行打包。此时就可以配置externals。
//weboack.config.js
modules.exports ={ 
externals : {'jquery' : 'jQuery' } }
	11. DllPlugin
拆分bundles。DllPlugin和DllReferencePlugin可以拆分bundles，提高构建速度。使用DllPlugin将不会频繁更新的库进行编译，
举例：新建一个配置文件 专门用来编译动态链接库，webpack.config.dll.js 将react和react-dom单独打包成一个动态链接库。



修改package.json的script
{ "scripts": 
{ "dev": "NODE_ENV=development webpack-dev-server",
 "build": "NODE_ENV=production webpack", 
"build:dll": "webpack --config webpack.config.dll.js"
 }, }

执行命令npm run build:all 将在dist目录下生成dll，放在这里时伪类更好的过滤动态链接库。dll/mainfest.json用于让DllReferencePlugin映射到相关依赖上。修改webpack的主配置文件webpack.config.js
plugins: [ 
new webpack.DllReferencePlugin({ 
manifest: path.resolve(__dirname, 'dist', 'dll', 'manifest.json')
 }), 
new CleanWebpackPlugin({ 
cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**']
 //不删除dll目录 }), //... ]
使用npm run build 构建，此时bundle.js体积大大减少。
修改public/index.html：<script src="/dll/react.dll.9dcd9d.js"></script> 

	12. 抽离公共代码
公共代码只需要下载一次就缓存起来，避免了重复下载。单页应用和多页应用都是配置在optimization.splitChunks中。


runtime的作用是将包含chunk映射关系的列表从main.js中抽离出来
module.exports = {
    //...
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        }
    }
}
最终会构建出来的文件会生成一个mainfest.js

webpack-bundle-analyzer优化
它可以查看哪一个包的体积比较大。
	- 安装 yarn add webpack-bundle-analyzer -D
	- 修改配置 
//webpack.config.prod.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
module.exports = merge(baseWebpackConfig, {
    //....
    plugins: [
        //...
        new BundleAnalyzerPlugin(),
    ]
})
用npm run build 打开http://127.0.0.1:8888/

	13. webpack自身优化
tree-shaking 
使用es6的import语法，在生产环境下，会自动移除没有使用到的代码。
scope hosting作用域的提升：变量提升，生产环境下默认开启。
babel配置优化：
