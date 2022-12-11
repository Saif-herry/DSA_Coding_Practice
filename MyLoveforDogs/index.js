
function MyLoveOfDog(strength,calories,n){
    strength = strength.sort();
    calories = calories.sort();
      let sum = 0;
      for(let i=0;i<n;i++){
        sum +=strength[i]*calories[i];
      }
      console.log(sum)
}

MyLoveOfDog([3,1],[4,3],2)