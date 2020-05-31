/*
执行一个函数的时候 就会创建一个上下文，并且压入执行上下文栈，当函数执行完毕的时候，
就会将函数的执行上下文从栈中弹出。
*/
function fun3(){
    console.log('fun3')
}
function fun2(){
    fun3()
}
function fun1(){
    func2()
}
func1();