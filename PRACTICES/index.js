/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/


function Duplicate(arr){
    
    let obj ={};
    for(let i=0;i<arr.length;i++){
        let temp = arr[i];
        for(let j=0;j<temp.length;j++){
            obj[temp[i]] = 1
        }

    }
    console.log(Object.keys(obj))


}

Duplicate([[1,3],[3,4],[4,6],[6,7]])