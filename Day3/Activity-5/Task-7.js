// Combining Conditions//Wap to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + ' is a leap year.');
    } else {
      console.log(year + ' is not a leap year.');
    }
  }
  
  let leapYear = 2023;
  checkLeapYear(leapYear);