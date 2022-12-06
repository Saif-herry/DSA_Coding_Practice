/*
153  --> 1+125+27 --> 153
*/


function ArmsStrong(num){
     num = new String(num)
     let n = num.length;
      let output=0;
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
ArmsStrong(153)