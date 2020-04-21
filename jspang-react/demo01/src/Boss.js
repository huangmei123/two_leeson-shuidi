//用css3实现react动画
import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
          }
          this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow?'show':'hide'}>Boos级人物-孙悟空</div>
                <div><button onClick={this.toToggole}>召唤</button></div>
            </div>
         );
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;