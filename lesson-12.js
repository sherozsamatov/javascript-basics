// Lesson 12. 1. Method chaining JavaScript
// Вызов методов один за другим, на одной линии

// let fullName = 'sheroz samatov';

// let letter = fullName.slice(0, fullName.indexOf(" ")).toUpperCase().charAt(0);

// console.log(letter);

// 2. Javascript checked method to check if the checkbox and radio buttons are checked or not

// document.getElementById("myButtom").onclick = function() {
//   const myCheckbox = document.getElementById("myCheckbox");
//   const visaBtn = document.getElementById("visaBtn");
//   const mastercardBtn = document.getElementById("mastercardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");

//   if(myCheckbox.checked) {
//     console.log('You are subscribed!');
//   }
//   else {
//     console.log('You are NOT subscribed!');
//   }

//   if(visaBtn.checked) {
//     console.log('You are paying with VISA!');
//   }

//   else if(mastercardBtn.checked) {
//     console.log('You are paying with Mastercard!');
//   }
//   else if(paypalBtn.checked) {
//     console.log('You are paying with PayPal!');
//   }
//   else {
//     console.log('You must select a payment type!');
//   }
// }


// 3. Javascript nested for loops. 
// Цикл внутри цикла, т.е. for внутри for

// for (let i = 1; i <= 3; i++) {
//   console.log('в каждой итерации i равно: ', i);
//   for (let j = 1; j <= 3; j++) {
//     console.log('в каждой итерации i, j равно: ', j);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

// let row = 4;
// let column = 5;

// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= column; j++) {
//     console.log(i, j);
//   }
// }

// Example 1. How to print a rectangle in the Page, DOM method.

// let row = prompt('Enter a number of rows: ');
// let column = prompt('Enter a number of columns: ');

// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= column; j++) {
//     // let a = document.getElementById("myRectangle").innerHTML;
//     // a += '*'; //  a = a + '*'

//     document.getElementById("myRectangle").innerHTML += '*';
//   }
//   document.getElementById("myRectangle").innerHTML += '<br>';
// }

// Example 2. How to print a rectangle in the console with a function

// printRectangle(4, 10);

// function printRectangle(row, column) {
//   let string = '';
//   for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= column; j++) {
//       string += '*';
//     }
//     string += "\n";
//   }
//   console.log(string);
// }




// Example 3. How to print a left triangle in JavaScript

// printTriangle(10)

// function printTriangle(number) {
//   let string = '';
  
//   for (let i = 1; i <= number; i++) {
//     for (let j = 0; j < i; j++) {
//       string += '*';
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

// Examle 4. How to print a right trianle in JavaScript

// printTriangle(15)

// function printTriangle(number) {
//   let string = '';
  
//   for (let i = 1; i <= number; i++) {
//     // for loop to print spaces
//     for (let j = 0; j < number - i; j++) {
//       string += ' ';
//     } 

//     // for loop to print the '*'
//     for(let k = 0; k < i; k++) {
//       string += '*';
//     }

//     string += '\n'
// }

// console.log(string);
// }