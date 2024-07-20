//1.use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = 'Adarsh';
let age = '28';

// console.log(`My name is ${name} and age is ${age}`)

//2.create a multi-line string using template literals and log it to the console.
const poem = `
  Roses are red,
  Violets are blue,
  Sugar is sweet,
  And so are you.
`;

// console.log(poem);

//3.use array destructuring to extract the first and second element from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];

// Destructuring the first two elements
const [first, second] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2

//4.use the object destructuring to exact the title and author from a book object and log them to the console.

const book4 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
  };
  
  // Destructure the title and author from the book object
  const { title, author } = book4;
  
  
//   console.log(`Title: ${title}`);   
//   console.log(`Author: ${author}`); 
  
//5. use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

//6. use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

//7. write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

//8. use enhanced object literals to create an object with methods and properties, and log the object to the console.

//9. create an object with computed property names based on variables and log the object to the console.
