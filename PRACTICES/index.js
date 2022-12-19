
/*
ArmStrong Number
Sample Input 
num = 153

Sample Output
true -->(1**3 + 5**3 + 3**3)
*/


function ArmStrong(num){
num = num.toString()
//console.log(typeof(num))
let output = 0;
for(let i of num){
  //console.log(i)
output += parseInt(i)**num.length

}
if(output === parseInt(num)){
  console.log(true)
}
else{
  console.log(false)
}
}


ArmStrong(133)