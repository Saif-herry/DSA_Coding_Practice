

function TwoSum(N,K,arr){
    let left = 0;
    let right = N-1;
    let sum = 0;
    let flag =false;
    while(left<right){
        sum = arr[left]+arr[right]
        if(sum==K){
            flag = true;
            break;
        }
        if(sum>K){
            right--;
        }
        if(sum<K){
            left++;
        }

    }
    if(flag==true){
        console.log(left , right);
    }
    else{
        console.log("-1","-1");
    }

}

TwoSum(4,9,[2,7,11,15])