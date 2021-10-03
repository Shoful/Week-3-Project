// 1) Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

function display() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
display();

// 2) Using a while loop, return an array that contains all odd numbers between 3 and 103

function odd() {
  let i = 3;
  let array = [];
  while (i <= 103) {
    if (i % 2 != 0) {
      array.push(i); i++;
    }
    else {
      i++;
    }
  }
  return array;
}
console.log(odd());

// 3)  arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  
// for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.

function arraySum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6]));

// 4) Use a loop to display the numbers 9 to 0 in descending order.

function reverseDisplay() {
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
}
reverseDisplay();

// 5) Write a function computing the factorial of n

function factorial(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}
let n = (10);
console.log(factorial(n));

// 6) Write a function using a for loop that returns the sum of all numbers from 1 to n. 

function numSum(n) {
  var sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum)
}
numSum(10);

// 7) Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ

function changer(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 != 0) {
      result.push("Z");
    } else {
      result.push(str[i]);
    }
  }
  let string = result.join("");
  return string;
}
console.log(changer("eggrolls"));
console.log(changer("I should make my own donuts"));