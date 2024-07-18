//wa func expression to find the max of two num and log the result

function findMax (a ,b){
   if (a > b){
    console.log(`${a} is bigger than ${b}`)
   }else if (b > a){
    console.log(`${b} is bigger than ${a}`)

   }else{console.log('please input a valid number')}
   return;
}
findMax(3, 9)  //