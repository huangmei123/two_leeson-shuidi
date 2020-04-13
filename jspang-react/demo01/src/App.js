//这个写法是es6 里结构符值的写法
// import React from 'react'
// const Compoent = React.Component
import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            //className是采用驼峰式命名
            <ul className="my-list">
                <li>{true ?'jspang':'技术胖'}</li>
                <li>I love </li>
            </ul>
        )
    }
}
export default App