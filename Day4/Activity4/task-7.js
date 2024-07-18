//write a program to print  a pattern using nested for loops

for (let i = 1; i <= 5; i++) { 
    let row = ''; 
    for (let j = 1; j <= i; j++) { 
        row += '* '; 
    }
    console.log(row); 
}

//*
//* *
//* * *
//* * * *
//* * * * * 