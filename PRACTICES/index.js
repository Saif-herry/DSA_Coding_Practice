/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Missing Integer 
Sample Input--> 1 1 2 3 3
Sample Output--> 5
*/
/*
function DuplicateElement(arr){
    let obj = {};

    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]]++
        }
    }
      
    console.log(Object.keys(obj).join(" "))
} 

DuplicateElement([1,1,2,3,3])
*/


/*
power of 2

sample input : 7
sample output : false

sample input : 8
sample output : true
*/

function power_of_2(num){
    
let flag = false;
while(num>1){
    if(num%2==0){
        num = num/2;
        flag = true;
    }
    else{
        flag = false;
        break;
    }
}
flag==true?console.log("true"):console.log("false")
}

power_of_2(8)





