import React ,{Component} from 'react';

//服务端 ： 为了SEO 为了性能 renderToString
//客户端： 为了交互 还要在前端事件绑定 
class Header extends Component {
    handleClick(){
        console.log('click')
    }
    render(){
        return(
            <button onClick={this.handleClick}abc></button>
        )
    }
}
export default Header;