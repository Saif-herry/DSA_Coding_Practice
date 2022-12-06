/*
arr = [2,7,11,15]
n = 4
k = 9

*/

function TwoSum(num){
   let left = 0;
   let right = num.length-1;
   let sum = 9;
   let flag = false;
   while(left<right){
    // console.log(num[left]+num[right])
    if(sum == num[left]+num[right]){
          flag = true;
          break;
        //   console.log("1")
    }
    if(sum<num[left]+num[right]){
        right--;
        // console.log("2")
    }
    if(sum>num[left]+num[right]){
        left++;
        // console.log("3",num[left])
    }
   }
   if(flag == true){
    console.log(left,right)
   }
   else{
    console.log("-1","-1")
   }
}

TwoSum([2,7,11,15])