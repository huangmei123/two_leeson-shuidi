//下面代码中a 在什么情况下会打印1？4
var a ={
    i:1,
    toString(){
        return a.i++
    }
} //简单数据类型是不可能的 
// a是变化的 对象
if(a ==1 && a==2 && a==3){
    console.log(1);
}