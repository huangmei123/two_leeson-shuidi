import React from 'react'
import ReactDOM from 'react-dom'
import Littersister from './Littersister'
// render就是渲染到哪 挂载到哪
//root是public/index.htmld的div
//<App /> 是jsx （JavaScript和xml的结合）。
//自定义的组件必须大写字母开头
ReactDOM.render(<Littersister />,document.getElementById('root'))