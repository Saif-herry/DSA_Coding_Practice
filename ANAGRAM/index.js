

function Anagram(x,y,m,n){
      
    x= x.split("").sort()
    y = y.split("").sort()
    if(m===n){
        for(let i=0;i<m;i++){
            if( x[i] == y[i]){
             flag = true;
            }
            else{
             flag = false;
             break;
            }
         }
    }
    else{
        flag = false     
    }
    flag===true?console.log("Anagram"):console.log("Not an Anagram");
    
}
let x="abcd";
let y ="dabc";
let m = x.length;
let n = y.length;

Anagram(x,y,m,n)

