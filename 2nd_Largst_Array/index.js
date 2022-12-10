/*

Find Second Largest From an array
arr = [2,7,4,9]
*/

function SecondLargest(arr){
    
    let F_Largest = -1 , S_Largest = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>F_Largest){
            S_Largest =F_Largest
            F_Largest = arr[i]
        }
        if(arr[i] > S_Largest && arr[i] != F_Largest){
               S_Largest = arr[i]
        }
    } 
     console.log(S_Largest)
}

SecondLargest([2,7,4,9])