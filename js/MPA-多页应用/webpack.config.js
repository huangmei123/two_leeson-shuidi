const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js'
  },  
  //公共依赖的抽取  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  optimization:{
      splitChunks:{
          cacheGroup:{
              commons:{
                  name:'commons',
                  chunks:'all',
                  minChunks:2,//最小引入次数 超过2次就提到common里
                  minSize:0
              }
          }
        }
  },
  plugins: [
    // new 一次
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      chunks: []  // 当前 html 引入的 js 文件 有哪些
    }),
    new HtmlWebpackPlugin({
      template: './src/promotion/index.html',
      chunks: []
    })
  ]
}