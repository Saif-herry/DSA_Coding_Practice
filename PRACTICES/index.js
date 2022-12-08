/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/


// function Duplicate(arr){
// let obj = {};
// for(let i=0;i<arr.length;i++){
//     let temp = arr[i]

//     for(let j=0;j<temp.length;j++){
//         if(obj[temp[j]]==undefined){
//             obj[temp[j]]=1
//         }
//         else{
//             obj[temp[j]]++
//         }
//     }
// }
// console.log(Object.keys(obj))
// console.log(obj)
// }

// Duplicate([[1,3],[3,4],[4,6],[6,7]])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Missing Integer 
Sample Input--> 4 5 1 3
Sample Output--> 2
*/

function MissingInteger(arr){

   let n = arr.length+1;
   let sum = (n*(n+1))/2

   for(let i=0;i<arr.length;i++){
    sum -= arr[i]
   }
   console.log(sum)
}

MissingInteger([4,5,1,3])







