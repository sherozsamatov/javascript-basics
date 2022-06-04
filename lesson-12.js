// ********** WATCH LESSONS 13, 15, 24, 28, 30, 32.

// ***************** index.js *****************
// Lesson 13 - Method chaining in JavaScript

// method chaining = calling one method after another
// in one continuous line of code

// let userName = "sheroz";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let letter = userName.charAt(0).toUpperCase().trim(); // is equivalent to the above code

// console.log(letter);


// ***************** index.js *****************
// Lesson 15 - JavaScript checked property

// document.getElementById("myButton").onclick = function(){

//   const myCheckBox = document.getElementById("myCheckBox");
//   const visaBtn = document.getElementById("visaBtn");
//   const mastercardBtn = document.getElementById("mastercardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");

//   if(myCheckBox.checked){
//     console.log("You are subscribed!");
//   }
//   else{
//     console.log("You are NOT subscribed!");
//   }

//   if(visaBtn.checked){
//     console.log("You are paying with a Visa!");
//   }
//   else if(mastercardBtn.checked){
//     console.log("You are paying with a Mastercard!");
//   }
//   else if(paypalBtn.checked){
//     console.log("You are paying with PayPal!");
//   }
//   else{
//     console.log("You must select a payment type!");
//   }
// }

/*
hmtl
  <label for="myCheckBox">subscribe</label>
  <input type="checkbox" id="myCheckBox"><br>

  <label for="visaBtn">Visa</label>
  <input type="radio" name="card" id="visaBtn">
  <label for="mastercardBtn">MasterCard</label>
  <input type="radio" name="card" id="mastercardBtn">
  <label for="paypalBtn">PayPal</label>
  <input type="radio" name="card" id="paypalBtn"><br>

  <button id="myButton">submit</button>
*/



// ***************** index.js *****************
// Lesson 24 - JavaScript nested loops

// nested loop = a loop inside of another loop

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');

// for(let i = 1; i <= rows; i+=1){
//     for(let j = 1; j <= columns; j+=1){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }

/*
html
<label id="myRectangle"></label>
*/

// Another example
// Nested loops

// for(let i = 1; i <= 3; i++) {
//     for(let j = 0; j <= 3; j++) {
// console.log("for each iteration of i = ", i,  "j runs:", j, "times.")
//         console.log(j);
//     }
// }



