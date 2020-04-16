## 前端工作流workflow webpack
- webpack配置 坤哥文章，
6个知识点
- webpack 和 架构
        文件webpack-build ->编译架构
        yarn add cross-env
  1. 源头 package.json
  "scripts": {
     "dev":"cross-env NODE_ENV=development node build/dev.js",
     "build":"cross-env NODE_ENV=production node build/build.js"
  },
  webpack为什么不直接出厂？架构，dev和build的工作
  cross-env进行服务器无差别环境变量配置<-----> node npm都用哪些？
  并行去同时考虑工作流架构，
  将编译工作（前端工作流）通过目录的方式，将build目录确定为开发架构的一项
  2. webpack的重要性：它是工作流的一环
  3. base.js可以同时服侍dev.js  build.js
  模块化 把基础配置做好，向外输出
  4. webpack 其他的module及插件处理？
    放在config.js中 文件模块分离
  5. lib 把module 放在 config 目录 一个文件一件事
  fingSync把所以js文件 组成数组输出出来

  6. 可拔插的webpack插件 
  打包器打包成最终的产品

  - babel化 
  js typescript
  - css 压缩
   postcss
  - htmltemplate