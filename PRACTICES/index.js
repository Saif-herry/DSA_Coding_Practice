

/*
arr = [0,1,0,3,12]
*/

function MoveZeroes(arr){
     
    if(arr.length==1) return arr;
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[j]=arr[i];
            j++;
        }
    }

    for(let i=j;i<arr.length;i++){
        arr[i] = 0
    }
    return arr;
}

console.log(MoveZeroes([0,1,0,3,12]))


