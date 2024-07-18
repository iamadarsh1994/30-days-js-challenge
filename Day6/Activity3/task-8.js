//use the 'filter' method to create a new array with only even numbers and log the new array

let newArr = [1, 2, 3, 4, 5, 6, 7];

let arr1 = newArr.filter((num) => {
  return num % 2 == 0;
});

console.log(arr1);
