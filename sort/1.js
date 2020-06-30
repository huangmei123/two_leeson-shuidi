//生成指定个数的随机数组
const generateArr = (num=10)=>{
  let arr = []
  for(let i=0;i<num;i++){
      let item = Math.floor(Math.random() * (num+1))
      arr.push(item)
  }
  return arr
}

//生成指定个数的元素x轴坐标
const generateArrPosX = (n =10,w=6,m=6)=>{
    let pos = [];
    for(let i=0;i<n;i++){
        let item = (w+m) *i
        pos.push(item)
    }
    return pos
}
/*冒泡排序
bubbleSort(arr = []) {
    let len = arr.length
    for(let i = 0; i< len; i++) {
      for(let j = 0; j < len - 1; j++) {
        if(arr[j] > arr[j+1]) {
          // 置换
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr
  }
*/
/*选择排序
selectionSort(arr){
    let len = arr.length,indexMin
    for(let i =0;i<len-1;i++){
        indexMin=i;
        for(let j=i;j<len;j++){
            if(arr[indexMin]>arr[j]){
                indexMin = j
            }
        }
        if(i !==indexMin){
            [arr[i],arr[indexMin]] = [arr[indexMin],arr[i]]
        }
    }
    return arr;
}
*/

/*插入排序
insertionSort(arr){
    let len = arr.length,j,temp;
    for(let i = 1;i<len;i++){
        j = i;
        temp = arr[i]
        while(j> 0 && arr[j-1]>temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp;
    }
}
*/
/*归并排序
mergeSortRec(arr){
    let len = arr.length
    if(len ===1){
        return arr
    }
    let mid = Math.floor(len/2),
    left=arr.slice(0,mid),
    right = arr.slice(mid,len)
    return merge(mergeSortRec(left),mergeSortRec(right))
}
//合并
merge(left,right){
    let result = [],
    l=0,
    r=0;
    while(l<left.length && r<right.length){
        if(left[1]< right[r]){
            result.push(left[1++])
        }else{
            result.push(right[r++])
        }
    }
    while(l<left.length){
        result.push(left[1++])
    }
    while(r<right.length){
        result.push(right[r++])
    }
}
*/

/*快速排序
quickSort=function(arr,left ,right){
  let index
  if(arr.length>1){
      index = partition(arr,left,right)
      if(left<index-1){
          quickSort(arr,left,index-1)
      }
      if(index<right){
          quickSort(arr,index,right)
      }
  }
}
//划分流程
partition(arr,left,right){
    let part = arr[Math,floor((right+left)/2)],
    i = left,
    j = right
    while(i <=j){
        hile(arr[i] < part) {
            i++
          }
          while(arr[j] > part) {
            j--
          }
          if(i <= j) {
            // 置换
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
          }
        }
        return i
    }
}
*/