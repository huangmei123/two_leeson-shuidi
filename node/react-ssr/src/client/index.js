import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';
import routes from '../Routes'
import Header from '../components/Header'
//SPA
// ReactDom.render(<Header/>,document.getElementById('root'))
//SSR
//调和 ：服务端已经完成 客户端不会重复做
const App = (
  <BrowserRouter>
    { renderRoutes(routes)}
  </BrowserRouter>
)
ReactDom.hydrate(<Header/>,document.getElementById('root'));
