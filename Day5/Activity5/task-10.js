// write a higher-order func that takes two func and a value , applies the first func to the value, and then applies the second func to the result.

// function newFun(para, para1, num) {
//   for (let i = 0; i < num; i++) {
//     para(); 
//     para1();
//   }
// }

// function saySome() {
//   console.log("Hello");
// }

// function newSome() {
//   console.log("Adarsh");
// }

// newFun(saySome, newSome, 4);
// -----

// Higher-order function that applies two functions to a value in sequence
function applyFunctions(func1, func2, value) {
  // Apply the first function to the value
  const firstResult = func1(value);

  // Apply the second function to the result of the first function
  const finalResult = func2(firstResult);

  // Return the final result
  return finalResult;
}

// Function to double a number
function double(x) {
  return x * 2;
}

// Function to add 3 to a number
function addThree(x) {
  return x + 3;
}

// Example usage: Apply the functions in sequence
const result = applyFunctions(double, addThree, 4);
console.log(result); // Output: 11
