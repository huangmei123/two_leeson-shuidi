value =1;
function foo(){
    echo $value;
}
fucntion bar(){
    local value = 2;
    foo;
}
bar