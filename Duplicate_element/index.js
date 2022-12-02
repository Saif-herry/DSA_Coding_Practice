function RemoveElement(N,arr){
let obj = {};
for(let i=0;i<N;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }
    else{
        obj[arr[i]]++;
    }
}

let bag = []
for(var key in obj){
    bag.push(key)
}
console.log(bag.join(" "))
}

RemoveElement(3,[1,1,3])