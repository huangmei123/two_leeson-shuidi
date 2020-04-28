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
  return state
}