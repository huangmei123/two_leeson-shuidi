function add(a,b){
    return a+b;
}
function min(a,b){
    return a-b;
}
function mixin(obj1,obj2){
    return{
        ...obj1,
        ...obj2
    }
}
//最原始的测试
// let expect = 10;
// let res  = add(7,3)
// if(expect!=res){
//     throw new Error('add 出错了')
// }

//封装一层
//should是断言库的一个方法（断言是预测的意思）
function should(result){
    return {
        equal :function(except){
            if(result !==except){
                throw new Error('add 出错了')
            }
        }
    }
}
function it(desc,fn){
  try{
    fn();
    console.log(`✔:${desc}pass`)
  }catch{
    console.log(`×:${desc}fail`)
  }
}
//一项测试不通过 下面的就会阻塞
it('test add',()=>{
    should(add(7,3)).equal(10)
})
it('test min',()=>{
    should(min(7,3)).equal(4)
})
it('test mixin',()=>{
    let obj = mixin({a:1},{b:2})
    should (obj(7,3)).equal({a:1,b:2})
})
// should (add(7,3)).equal(10)
// should (min(7,3)).equal(4)