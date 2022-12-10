

function Power_of_2(num){


    let flag = true;
    while(num>1){
        if(num%2==0){
            num=num/2;
            flag = true;
        }
        else{
            flag = false;
            break;
        }

    }
    flag==true?console.log("true"):console.log("False")
}

Power_of_2(8)