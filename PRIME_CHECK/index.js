

function PrimeNumber(Num){
   let count=0;
    for(let i=2;i<Num;i++){
        if(Num%i==0){
            count++;
        }
    }
    count==0?console.log("Prime"):console.log("Not Prime")
}

PrimeNumber(9)