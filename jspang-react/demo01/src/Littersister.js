import React,{Component,Fragment} from 'react'

class Littersister extends Component{
    constructor(props){
        super(props)//调用父类的构造函数，固定写法
        this.state={
            inputValue:'', //input中的值
            list:['迪奥','杨树林'] //服务列表
        }
        
    }
    render(){
        return (
            <Fragment>
                <div>
                {/* this.state.inputValue 此时把inputValue赋予给一个jspang */}
                {/* 此时我们已经再文本框中输入值，但是无变化，因为是强制绑定了inputValue值，
                要想改变就要绑定响应事件，去改变inputValue值。 */}
                     <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index) =>{
                       return <li key={index+item}>{item}</li>
                       })
                   }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        // console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}
export default Littersister