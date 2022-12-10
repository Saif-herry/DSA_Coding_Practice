/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Armstrong Number:

Sample input: 153
sample output: 153

*/

function ArmStrongNumber(num){

    num = num.toString()
    let output = 0
    for(let i of num){
        output += parseInt(i)**num.length
    }
    output===parseInt(num)?console.log("ArmStrong"):console.log("Not ArmStrong")
}
ArmStrongNumber(154)

