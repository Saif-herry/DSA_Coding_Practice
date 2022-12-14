/*
n=4
k=9
arr = [2,7,11,15]
*/

function TwoSum(n,k,arr){
  let left = 0;
  let right = n-1;
  let flag = false;
  while(left<right){
    let sum = arr[left]+arr[right]
       if(sum==k){
        flag = right
        break
       }
       else if(sum>k){
          
       }
  }
}

TwoSum(4,9,[2,7,11,15])
