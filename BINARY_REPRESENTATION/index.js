

function BinaryRepresentation(num){
    
    let bag = "";
    while(num>0){
       bag += num%2;
       num = Math.floor(num/2)

    }
    console.log(bag)
}
BinaryRepresentation(7)