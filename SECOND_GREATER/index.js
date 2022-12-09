

function SecondGreater(a,b,c){
     
    if(a>b && a<c || a<b && a>c){
        console.log(a)
    }
    else if(b>a && b<c || b<a && b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }
}
SecondGreater(5,7,3)