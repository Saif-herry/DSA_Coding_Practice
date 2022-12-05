/*
Given a number x, determine whether the given number is
 Armstrong number or not. 
*/


function armstrong(n){
    let number = new String(n)
 
    n = number.length
    let output = 0
    for(let i of number)

      output = output + parseInt(i)**n
 
    if (output == parseInt(number))
        return("True")
    else
        return("False")
}
         
console.log(armstrong(153))
console.log(armstrong(1634))

// var number = "153"
// var n = number.length;
// let i=0
// var output = 0
// for(i of number){
//    output = output + parseInt(i)**n
// }
// if(output == parseInt(number)){
//     console.log("True")
// }
// else{
//     console.log("False")
// }