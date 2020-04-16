import React, { Component } from 'react';
class LittersisterItem
 extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <div onClick={this.handleClick}>{this.props.content}</div>
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
 
export default LittersisterItem;