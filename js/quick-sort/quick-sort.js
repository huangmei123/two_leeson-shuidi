//1.provit找到正确的位置（数组里卖弄的索引
//2. 左边小于provit的数 <provit < 右边大于provit的数
//分治
function parition(nums,left,right){
    if(left >=right) return 
  let piovt = nums[left]; //piovt为基准值
  //从左边扫描到右边
  //再使用一个变量  将大值换到右边
  let j = left;//j是记录piovt大的数 i是小的数
  for(let i = left;i<nums.length;i++){
      if(nums[i] < piovt){
        //原地交换

        swap(nums,i,j);
        j++;
      }
    }
    parition(nums,left,j-1)
    parition(nums,j+1,right)
}
function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}
function quickSort(arr){
    parition(arr,0,arr.length-1)
}