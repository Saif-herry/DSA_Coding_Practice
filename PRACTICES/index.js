
/*
arr = [2,7,4,9]
x = "abcd" 
y= "dacb"
m = x.length
n = y.length
*/


function Anagram(x,y,m,n){
   
   x=x.split("").sort()
   y=y.split("").sort()
   let flag = false
   for(let i=0;i<n;i++){
    if(x[i]==y[i]){
      flag = true
    }
    else{
      flag = false
      break;
    }
   }
   flag==true?console.log("True"):console.log("False")
}
let x = "abcd"
let y = "dacb"
let m = x.length
let n = y.length
Anagram(x,y,m,n)