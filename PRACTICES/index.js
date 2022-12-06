/*
arr = [2,7,11,15]
n = 4
k = 9

*/


function TwoSum(n,k,arr){
    let left = 0;
    let right = n-1;
    sum = 0;
    let flag = false;
    while(left<right){
        sum = arr[left] + arr[right]
        if(sum == k){
            flag = true;
            break;
        }
        if(sum>k){
            right--;
        }
        if(sum<k){
            left++;
        }
    }
    if(flag==true){
        console.log(left,right)
    }
    else{
        console.log("-1","-1")
    }

}

TwoSum(4,9,[2,7,11,15])