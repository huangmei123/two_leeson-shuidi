//服务器渲染
import express from 'express'
import React from 'react';//只要使用了jsx 就要引入react
// import fs from 'fs'
// import http from 'http'
import {renderToString} from 'react-dom/server'
import Header from '../components/Header.jsx'
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Routes from '../Routes'
const app =express();

//static目录做了静态资源的一个映射
app.use(express.static('static'))
app.get('*',(req,res)=>{
    //入口组件 jsx语法
    const App=(
        <StaticRouter location={req.url}>
              { renderRoutes(Routes)}
        </StaticRouter>
    )
    const htmlStr =renderToString(App);

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- 创建root结点 reactDOM.render -->
        <div id="root">${htmlStr}</div>
        <script src="/index.js"></script> 
    </body>
    </html>`)
})

app.listen(3000,()=>{
    console.log('server is running 3000 port')
})