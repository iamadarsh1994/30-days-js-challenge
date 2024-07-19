//1.create an object representing a book with properties like title, author, and year, and log the object to the console.

const { title } = require("process")

let book = {
title: 'ABC',
author: 'Adarsh',
year: '2024',
}

// console.log(book)

//2.access and log the title and author prop of the book obj

// console.log(book.title, book.author)

//object method
//3.add a method to the book obj that returns a string with the book's title and author , and log the result of calling this method.
let book2 = {title: 'xyz',
    author:'john',
    year: 2024,
getDetails : function(){
    return `${this.title} by ${this.author}`;
}
 }
//  console.log(book2.getDetails())

//4.add a method to the book obj that takes a para(year) and updates the book's year property, then log the updated obj.

//5.create a nested obj representing a library with prop like name and books (an array of book objs), and log the library obj to the console.

//6.Access and log the name of the library and the titles of all the books in the library.

//7.Add a method to the book obj that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.

//8. use a for...in loop to iterate over the prop of the book obj and log each prop and its value

//9. use Object.keys and Object.values methods to log all the keys and values of the book obj.

