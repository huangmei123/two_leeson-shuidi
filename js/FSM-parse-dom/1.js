//题目要求 查找a字母
function match( string){
    for( let c of string) {
        if(c ==='a') return true;
    }
    return false
}

//查找ab
//先找a 再找b
function matchAB(string){
    let foundA =false;
    for( let c of string){
        if( c ==='a'){
            foundA = true;
        }else if( foundA && c==='b'){
            return true;
        }else{
            //重新开始匹配ab 上面的已经失效了
            foundA = false
        }
    }
    return false;
}
console.log(match('acb'))

//找abcdef 要找到上一个字母 才能使找到下一个字母有意义
//这样的方法很难维护  
function matchABCDEF(string){
    let foundA =false;
    let foundB =false;
    let foundC =false;
    let foundD =false;
    let foundE =false;
    let foundF =false;
    for( let c of string){
        if( c ==='a'){
            foundA = true;
        }else if( foundA && c==='b'){
            foundB =true
        }else if( foundA && c==='c'){
            foundC =true;
        }else{
            //重新开始匹配ab 上面的已经失效了
            foundA = false
        }
    }
    return false;
}
console.log(match('acb'))

//如何进行优化呢？
//将一个个状态串联起来
function newMatch(string){
    let state = foundA;
    for( let c of string){
        state = state(c);
    }
    return state === end
}
//写成一个个状态机
function foundA(c){
    if(c ==='a'){
        return foundB
    }else{
        return foundA
    }
}
function foundB(c){
    if(c ==='b'){
        return foundC
    }else{
        return foundA//没找到就从头开始 返回方法
    }
}
function end(){
    return
}