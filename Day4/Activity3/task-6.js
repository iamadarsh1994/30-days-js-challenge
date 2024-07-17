//wap to calculate the factorial of a number using a do...while loop
//factorial of 5 - 1*2*3*4*5
let num = 5;
let factorial = 1;
let i = num;

do {
    factorial *= i;
    i--;
} while (i > 0);

console.log(`The factorial of ${num} is ${factorial}`);