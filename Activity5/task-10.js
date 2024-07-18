// write a higher-order func that takes two func and a value , applies the first func to the value, and then applies the second func to the result.

function newFun(para, para1, num) {
  for (let i = 0; i < num; i++) {
    para(); 
    para1();
  }
}

function saySome() {
  console.log("Hello");
}

function newSome() {
  console.log("Adarsh");
}

newFun(saySome, newSome, 4);
//5:41pm
