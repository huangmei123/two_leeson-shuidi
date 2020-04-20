import React,{Component,Fragment} from 'react'
import LittersisterItem from './LittersisterItem'
import axios from 'axios'
class Littersister extends Component{
    //在某一时刻，可以自动执行的函数
    //但此时的constructor 是es6的语法，暂时当作是生命周期函数的初始阶段
    constructor(props){
        super(props)//调用父类的构造函数，固定写法
        this.state={
            inputValue:'', //input中的值
            list:['迪奥','杨树林'] //服务列表
        }
        
    }

    // componentWillMount(){
    //     console.log('------组件将要挂载到页面的时刻')
    // }
    // componentDidMount(){
    //     console.log('-------组件挂载完成');
    // }

    // shouldComponentsUpdate(){
    //     console.log('1-shouldComponentsUpdate')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('2-componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('4------')
    // }
    // //当组件从页面中删除的时候执行
    // componentWillUnmount(){
    //     console.log('child - componentWillUnmount')
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextProps.content !== this.props.content){
    //         return true
    //     }else{
    //         return false
    //     }
    
    // }

    //可以在componentDidMount生命周期函数中请求axios，在其他生命周期函数中容易出问题。
//以掘金的一个接口为例 做一次ajax请求
    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    
    render(){
        console.log('3-render-----组件挂载中')
        return (
            <Fragment>
                <div>
                {/* this.state.inputValue 此时把inputValue赋予给一个jspang */}
                {/* 此时我们已经再文本框中输入值，但是无变化，因为是强制绑定了inputValue值，
                要想改变就要绑定响应事件，去改变inputValue值。 */}
                     <input 
                     id="jspang" 
                     className="input" 
                     value={this.state.inputValue} 
                     onChange={this.inputChange.bind(this)}
                     ref={(input)=>{this.input=input}}
                     />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                   {
                       this.state.list.map((item,index) =>{
                        // 删除选项，添加点击事件 增加方法，并得到下标index
                       return (                      
                           <LittersisterItem
                           key={index+item}
                           content={item}
                           index={index}
                           avename='abc'
                           deleteItem={this.deleteItem.bind(this)}
                           />
   
                       )
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
            inputValue:this.input.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },() =>{
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    //删除列表项,
    deleteItem(index){
        console.log(index);
        let list =this.state.list
        //删除 删除索引项一位
        list.splice(index,1)
        //更新删除后的列表
        this.setState({
            list:list
        })
    }
}
export default Littersister
