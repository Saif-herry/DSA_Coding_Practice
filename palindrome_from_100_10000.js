/*
Write a programme to find palindrom from 100 to 100000

*/

// A function to check if n is palindrome

function isPalindrome(n){
    let flag = true;
    n = n.toString();
    let s = 0;
    let t = n.length-1;
    while(s<=t){
        if(n[s]===n[t]){
            s++;
            t--;
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
    if(flag == true){
        return Number(n)
    }
}

//Print palindrome b/w min and max

function countPalindrome(min,max){
    for(var i=min;i<=max;i++){
        if(isPalindrome(i))
        {
            console.log(i+" ")
        }
    }
}

countPalindrome(100,100000)