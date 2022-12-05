
function Fibonacy(n){
let n1 = 0;
let n2 = 1;
let sum = 0;
for(let i=1;i<n;i++){
    sum = n1+n2;
    n1 = n2;
    n2 = sum;
}
return (n2)
}

console.log(Fibonacy(5))
//FIB(5) = FIB(N-1)+FIB(N-2)