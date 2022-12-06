/*
Armstrong number  123 -->321
*/


function Armstrong(num){
 num =new String(num) 
 console.log(num)
let n = num.length;
let output = 0;

for(let i of num){
    output += parseInt(i)**n
}
if(output == parseInt(num)){
    console.log("true")
}
else{
    console.log("false")
}
}
Armstrong(153)


