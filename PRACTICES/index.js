/*
Fibonachi series--> 0,1,1,2,3,5,8
*/

function Fibonachi(num){

    let n1 = 0;
    let n2 = 1;
    let sum = 0;
    for(let i=1;i<num-1;i++){
       sum = n1+n2;
       n1 = n2;
       n2 = sum;

    }

    return n2
}

console.log(Fibonachi(5))