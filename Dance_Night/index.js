/*
Dance Night:
4 5
2 5 6 8
3 8 5 1 7
*/

function DanceNight(m,n,boy,grl){
     
    boy = boy.sort()
    grl = grl.sort()
    let flag = false;
    for(let i=0;i<m;i++){
        if(boy[i]>=grl[i]){
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
    flag==true?console.log("true"):console.log("false");

}

let m=4 , n=5, boy = [2,5,6,8] , grl = [3,8,5,1,7]
DanceNight(m,n,boy,grl)

