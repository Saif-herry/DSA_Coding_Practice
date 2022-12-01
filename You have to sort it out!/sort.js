/*
Given an array A of non-negative integer of size m.your task is to sort the array in non-decrease
order and print out the original indices of the new sorted array.

Example:

A={4,5,3,7,1}

After sorting the new array becomes A={1,3,4,5,7}.

The required output should be "4 2 0 1 3"
*/

function sort(N,arr){
    var newarr = [];
    for(let i =0;i<N;i++){
        newarr.push(i)
    }

    for(let i=0;i<N-1;i++){
        for(let j=0;j<N-i-1;j++){
            let temp,temp1;
            if(arr[j]>arr[j+1]){
              temp = arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;

              temp1 = newarr[j];
              newarr[j]=newarr[j+1]
              newarr[j+1]=temp1
            }
        }
    }
    console.log(newarr.join(" "));
}

sort(5,[4,5,3,7,1])