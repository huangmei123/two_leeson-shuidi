//把各种template情况输出为node，
// tag标签 
// data 节点的attribute\
//是文本节点 没有data，有的节点没有子节点
export function h(tag,data=null,children=null){
    let flags = null;//标记，什么类型的节点
    return { //虚拟dom
        _isVNode:true, //架构vue的过程就是实现vnode的过程
        flags,//diff算法优化 没有他也可以很好的实现但是会多很多重复的耗性能的节点类型判断代码
        //把节点类型的判断提前 读vue源码学的
    }
}