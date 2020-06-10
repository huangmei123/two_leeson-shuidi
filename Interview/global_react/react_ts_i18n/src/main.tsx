import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import {LoginPage} from "./pages/login/loginPage";
import { createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles";
import "./i18n"
// material-ui是react的ui框架，具有material design风格
// Provider不是redux独有的功能 允许内部组件跨过父子孙的关系
// 1. hello 你好一些国际化需求 使用插件 i18n
// 2.技术不一样，国外react居多 国内vue；框架不同；
const theme = createMuiTheme({ //风格化
    typography: {
        useNextVariants: true
      }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <HashRouter>
          <Switch>
              <Route exact={true} path="/" component={LoginPage}/>
          </Switch>
      </HashRouter>
    </MuiThemeProvider>
    ,document.getElementById('root')
)