/*

Find Second Largest From an array
arr = [2,7,4,9]
*/

function SecondLargest(arr){
    
    let F_large = -1, S_large = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]>F_large){
            S_large = F_large
            F_large = arr[i]
        }
        else{
            if(arr[i]>S_large && F_large != arr[i]){
                S_large = arr[i]
            }
        }
    }
    console.log(S_large)
}

SecondLargest([2,7,4,9])




