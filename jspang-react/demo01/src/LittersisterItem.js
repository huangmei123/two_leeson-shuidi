import React, { Component } from 'react';
import PropTypes from 'prop-types';
class LittersisterItem
 extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    //组件第一次存在于dom中，函数不会被执行的。

    //如果已经存在于dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('------')
    // }
    render() { 
        return ( 
            <div onClick={this.handleClick}>
                {this.props.avename}为你服务-{this.props.content}
            </div>
         );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
    deleteItem(index){
        let list =this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

LittersisterItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    avename:PropTypes.string.isRequired
}
LittersisterItem.defaultProps={
    avename:'aaa'
}
 
export default LittersisterItem;