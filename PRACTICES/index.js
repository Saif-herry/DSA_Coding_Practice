
/*
Sample Input
[[1,3],[3,4],[4,6],[6,7]]

Sample Output
[1,3,4,6,7]
*/


function duplicate_from_2D_Array(arr){
  let obj={};
for(let i=0;i<arr.length;i++){
  let temp = arr[i]
  for(let j=0;j<temp.length;j++){
    obj[temp[j]] = 1
  }

}
console.log(Object.keys(obj))
}


duplicate_from_2D_Array([[1,3],[3,4],[4,6],[6,7]])