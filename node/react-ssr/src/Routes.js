import React from 'react';
import App from './IndexRoute';
import Home from './pages/home/index';
import Login from './pages/login/index';
// IndexRoutes.jsx的存在类似于全局组件 无论哪一个路由都可以加载它

export default[
{
    path:'/',
    component:App,
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/login',
            component:Login
        }
    ]
}
]
