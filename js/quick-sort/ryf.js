const arr=[0,1,9,8,4];

const quickSort = function(arr){
    if(arr.length<=1)return arr;
    let provit = arr[0];
    let provit =arr[0];
    for( let i =1;i<arr.length;i++){
        if(arr[i]<provit) left.push(arr[i]);
        if(arr[i]>provit) right.push(arr[i]);
    }
    return [...(quickSort(left)),provit,...(quickSort(right))]
}
console.log(quickSort(arr))