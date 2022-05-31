// ***************** index.js *****************
// Lesson 8 - Hypotenuse calculator practice program in JavaScript

// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function(){

//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }

/* 
html
  <label id="aLabel">Side A:</label><br>
  <input type="text" id="aTextBox"><br>
  <label id="bLabel">Side B:</label><br>
  <input type="text" id="bTextBox"><br>
  <button type="button" id="submitButton">submit</button><br>
  <label id="cLabel"></label><br>
*/




// ***************** index.js *****************
// Lesson 9 - Counter program in JavaScript

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count=0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML = count;
// }


/*
html
  <label id="countLabel">0</label><br>
  <button id="decreaseBtn">decrease</button>
  <button id="resetBtn">reset</button>
  <button id="increaseBtn">increase</button>
*/



// ***************** index.js *****************
// Lesson 10 - Random number generator in JavaScript

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function(){

//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;
// }

/*
html
  <label id="xlabel"></label><br>
  <label id="ylabel"></label><br>
  <label id="zlabel"></label><br>
  <button type="button" id="rollButton">roll</button>
*/


// ***************** index.js *****************
// Lesson 11 - Useful string methods in JavaScript

// useful string properties & methods

// let userName = "Sheroz Samatov";
// let phoneNumber = "123-456-7890";

//console.log(userName.length);
// console.log(userName.charAt(7));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// userName = userName.trim(); // will remove trailing whitespaces before and after the string
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();

// console.log(userName);

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);

// ***************** index.js *****************
// Lesson 12 - String slicing in JavaScript

// slice() extracts a section of a string 
//         and returns it as a new string, 
//         without modifying the original string

// let fullName = "Snoop Dogg";
// let firstName;
// let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// ***************** index.js *****************
// Lesson 13 - Method chaining in JavaScript

// method chaining = calling one method after another
// in one continuous line of code

// let userName = "sheroz";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let letter = userName.charAt(0).toUpperCase().trim(); // is uquivalent to the above code

// console.log(letter);


