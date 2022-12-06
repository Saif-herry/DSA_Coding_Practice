/*
Armstrong number  123 -->321
*/


function IsPalindrome(num){
    num = new String(num)
    
    let left = 0;
    let right = num.length-1;
    while(left<right){
        if(num[left]==num[right]){
            left++;
            right--;
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
 if(flag == true){
   return num
 }
 
}

function countPalindrom(min,max){
    var bag = [];
for(let i= min;i<max;i++){
    if(IsPalindrome(i)){
      bag.push(i) 
    }
}
console.log(bag)
}

countPalindrom(100,1000)




