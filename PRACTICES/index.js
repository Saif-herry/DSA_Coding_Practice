
/*
arr = [2,7,4,9]
*/

const Second_largest=(arr)=>{

    let F_LArgest = -1, S_Largest = -1
    for(let i=0;i<arr.length;i++){
      if(arr[i]>F_LArgest){
        S_Largest = F_LArgest;
        F_LArgest = arr[i];
      }
      else{
        if(arr[i]>S_Largest && F_LArgest!== arr[i]){
          S_Largest = arr[i]
        }
      }
    }
    console.log(S_Largest)

}

Second_largest([2,7,4,9])