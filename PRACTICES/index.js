

function TwoSum(num){
   let left = 0;
   let right = num.length-1;
   let sum = 9;
   let flag = false;
   while(left<right){
    if(sum == num[left]+num[right]){
          flag = true;
          break;
    }
    else if(sum>num[left]+num[right]){
        right--;
    }
    else if(sum<num[left]+num[right]){
        left++;
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