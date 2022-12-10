/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function MoveZero(arr){
    
    if(arr.length===1) return arr
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[j]=arr[i]
            j++
        }
    }
    for(let i=j;i<arr.length;i++){
        arr[i]=0
    }
return arr

}
console.log(MoveZero([0,1,0,3,12]))