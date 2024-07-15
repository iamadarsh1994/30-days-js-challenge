//wap to find the largest of three numbers using nested if-else statement
let num1 = 8
let num2 = 16
let num3 = 24

function checks(){
  if(num1 > num2 && num1 > num3){
    console.log("num1 is greater than num2 and num3, Hence num1 is largest")
  }else if (num2 > num1 && num2 > num3){
    console.log("num2 is greater than num3 and num1, Hence num2 is largest")
    
  }else{
    console.log('num3 is the largest')
  }return
}
checks()