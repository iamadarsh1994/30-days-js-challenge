//1.select an HTML element by its ID and change its text content.
document.getElementById('root').innerHTML = 'HelloWorld';
//2.select an HTML element by its class and change its background color
document.querySelectorAll('.cls1').forEach((element) => {
    element.style.backgroundColor = 'black'; // New color
});
//3.create a new 'div' element with some text content and append it to the body.

document.getElementsByTagName('body')[0].innerHTML = '<div style=color:black;>heyyy</div>';

//4.create a new li element and add it to an existing ul list

//5.select an HTML element and remove it from the DOM

//6.remove the last child of a specific HTML element.

//7.select an HTML element and change one of its attributes(eg src of an img tag)

//8.add and remove a css class to /from an HTML element

//9.add a click event listener to a button that changes the text content of a paragraph 

//10.add a mouseover event listener to an element that changes its border color.

