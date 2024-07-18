//use the 'map' method to create a new array where each number is doubled and log the new array
//when using the map method in JavaScript, it always requires a function as an argument. This function defines how each element of the array will be transformed to create a new array.
let newArr = [1, 2, 3, 4, 5, 9];

let arr1 = newArr.map((num) => {
  return num * 2;
});

console.log(arr1);
