/*
arr = [[1,3],[3,4],[4,6],[6,7]]
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Missing Integer 
Sample Input--> 4 5 1 3
Sample Output--> 2
*/

function Fizzbuzz(num){
    for(let i=1;i<=num;i++){
        if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else if(i%3==0 && i%5==0){
            console.log("FIzzBuzz");
        }
        else{
            console.log(i)
        }
    }
}
Fizzbuzz(15)






