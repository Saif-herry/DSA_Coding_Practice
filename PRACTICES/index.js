/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Missing Integer 
Sample Input--> 4 5 1 3
Sample Output--> 2
*/

function MissingInteger(arr){
      
    let n = arr.length+1;
    let output = 0;
    sum_of_n_num = (n*(n+1))/2;
    for(let i=0;i<arr.length;i++){
        sum_of_n_num -=arr[i];
    }
    console.log(sum_of_n_num)
}

MissingInteger([4,5,1,3])







