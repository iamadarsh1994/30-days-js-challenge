//write a higher-order func that takes a func and a num , and calls the func that many times.

function repeatFun(func, num) {
    for (let i = 0; i < num; i++) {
        func(); 
    }
}

function sayHello() {
    console.log('Hello Adarsh!');
}

repeatFun(sayHello, 5);
