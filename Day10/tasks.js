//1.add a click event listener to a button that changes the text content of a paragraph. 
let para = document.getElementById('root')
document.getElementById('btn').addEventListener('click', function() {
    para.innerHTML = '<b>Not Now</b>';
    console.log('this works');
});

    
//2.Add a double-click event listener to an image that toggles its visibility.
document.querySelector('.images').addEventListener('dblclick', function() {
    const img = document.querySelector('.images');
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
});


//3. add a mouseover event listener to an element that changes its background color.
document.getElementById('btn').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
    console.log('this works');
});
//4. add a mouseout event listener to an element that resets its background color.
document.getElementById('btn').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'pink';
    console.log('this works');
});
//5. add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('inpt').addEventListener('keydown', function(event) {
    
    console.log(`Key pressed: ${event.key}`);
});

//6.add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('inputField').addEventListener('keyup', function(event) {
   
    const currentValue = event.target.value;

    document.getElementById('displayParagraph').textContent = currentValue;
});
//7. add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('forms').addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    console.log('Form Data:', formValues);
})
//8. add a change event listener to a select dropdown that displays the selected value in a paragraph 
const selectElement = document.getElementById('mySelect');
  
  const paragraph = document.getElementById('selectedValue');
   
  selectElement.addEventListener('change', function() {
  
    paragraph.textContent = 'Selected value: ' + this.value;
  });
//9. add a click event listener to a list that logs the next content of the clicked list item using event delegation
const list = document.getElementById('myList');
  
 
  list.addEventListener('click', function(event) {
    
    if (event.target.tagName === 'LI') {
      
      console.log('Next content:', getNextContent(event.target));
    }
  });

  
  function getNextContent(clickedLi) {
    
    const index = Array.from(clickedLi.parentNode.children).indexOf(clickedLi);
    
    if (index < clickedLi.parentNode.children.length - 1) {
      return clickedLi.parentNode.children[index + 1].textContent;
    } else {
    
      return 'No next item available';
    }
  }
//10.add an event listener to a parent element that listens for event from dynamically added child elements.


