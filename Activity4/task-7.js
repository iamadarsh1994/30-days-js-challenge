//write a func that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(a, b = 2){
   let result = a * b;
   return result;
}
console.log(product(9, 4)) //