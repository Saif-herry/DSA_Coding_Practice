/*
Palindrom --> 123->321
*/

function IsPalindrom(num){
      let flag = false;
    num = new String(num)
    let left = 0;
    let right = num.length-1;
    while(left<right){
        if(num[left] == num[right]){
            left++;
            right--;
            flag = true;
        }
        else{
            flag = false
            break
        }
    }
    if(flag==true){
        return num;
    }
}



function CheckPalindrom(min,max){
var bag = []
    for(let i = min;i<max;i++){
        if(IsPalindrom(i)){
            bag.push(i)
        }
    }
    console.log(bag)
}
CheckPalindrom(100,1000)

