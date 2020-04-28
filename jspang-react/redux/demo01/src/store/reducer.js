//暴露的方法
const defaultState={
    inputValue:'writing something',
    list:[
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}
export default(state=defaultState,action) =>{
    console.log(state,action)
    //reducer里只能接受state，不能改变state
    if(action.type === 'changeInput'){
        //深度拷贝
        let newState =JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
  return state
}