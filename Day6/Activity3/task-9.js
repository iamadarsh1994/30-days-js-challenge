//use the 'reduce' method to calculate the sum of all numbers in the array and log the result.
//The reduce method iterates over each element in the array and applies a callback function to combine them into a single value.
let newArr = [1, 2, 3, 4, 5, 6, 7];

let arr1 = newArr.reduce((a, c)=>{return a + c }, 0);
console.log(arr1)