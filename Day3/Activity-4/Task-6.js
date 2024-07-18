//conditional(ternary)Operator//wap a program that uses the ternary operator to check if a number is even or odd and log the result to the console
let number = 13
function checks(number){
let result = (number % 2 == 0) ? 'even' : 'odd';  
 return result; 
}
console.log(checks(number));