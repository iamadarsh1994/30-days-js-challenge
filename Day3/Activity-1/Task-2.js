//wac if a person is eligible to vote (Age>18) and log the result
let age = 17;
function check() {
  if(age == 18 || age > 18){
    console.log("Eligible to vote")
  } else{
    console.log("You are not eligible to vote")
  }
  return;
}
check()