// Lesson 11 

// 1. Counter program in Javascript

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function () {
//   count -= 1; // count = count - 1
//   document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function () {
//   count += 1; // count = count + 1
//   document.getElementById("countLabel").innerHTML = count;
// }


/*
hmtl
  <label class="label" id="countLabel">0</label><br>

  <div class="box">
    <button id="decreaseBtn">decrease</button>
    <button id="resetBtn">reset</button>
    <button id="increaseBtn">increase</button>
  </div>


css
  .box {
  display: flex;
  gap: 0.5rem;
  width: 200px;
  margin: 0 auto;
}

.label {
  display: block;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
*/




// 2. Random number generator in JavaScript


// это генерирует число между 1 и 10, т.е 1 <= a >= 10
// let a = Math.floor(Math.random()*10 + 1);


// это генерирует число между 1 и 6, т.е 1 <= a >= 6
// let b = Math.floor(Math.random()*6 + 1);

// console.log(b);



// let a;
// let b;
// let c;

// document.getElementById("rollButton").onclick = function(){
//   a = Math.floor(Math.random() * 6 + 1);
//   b = Math.floor(Math.random() * 6 + 1);
//   c = Math.floor(Math.random() * 6 + 1);

//   document.getElementById("aLabel").innerHTML = a;
//   document.getElementById("bLabel").innerHTML = b;
//   document.getElementById("cLabel").innerHTML = c;
// }

/* html
  <label id="aLabel"></label><br>
  <label id="bLabel"></label><br>
  <label id="cLabel"></label><br>
  <button type="button" id="rollButton">Roll Dice</button>
*/




// 3. JavaScript number guessing game

// const answer = Math.floor(Math.random() * 10 + 1);

// let guesses = 0;

// document.getElementById("submitButton").onclick = function() {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1 // guesses = guesses + 1

//   if(guess == answer){
//     alert(`${answer} is the number, it took you ${guesses} guesses!`);
//   }

//   else if (guess < answer) {
//     alert('Too small');
//   }

//   else {
//     alert('Too big');
//   }
// }

/* html

  <h1>Number Guessing Game</h1>
  <p>Pick a number between 1 and 10</p>
  <label>Enter a guess</label>
  <input type="text" id="guessField">
  <button type="button" id="submitButton">Submit</button>

*/


// Useful string methods in JavaScript

// let fullName = 'Sheroz Samatov';
// let phoneNumber = '123-456-7890';

// let methodResult = fullName.length;
// methodResult = fullName.charAt(13);
// methodResult = fullName.indexOf(' ');
// methodResult = fullName.lastIndexOf('o');
// methodResult = fullName.trim();
// methodResult = fullName.toUpperCase();
// methodResult = fullName.toLowerCase();

// console.log(methodResult);


// phoneNumber = phoneNumber.replaceAll('-', '/');
// console.log(phoneNumber);


// String slicing in Javascript

// .slice() - это метод которая вырезает часть текстовой строки и возвращает его как новую строку,
// при этом НЕ меняет исходную строку


// let fullName = 'Sheroz Samatov';
// let firstName;
// let lastName;

// firstName = fullName.slice(0, 6)
// lastName = fullName.slice(7)

// console.log(firstName);
// console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1).trim();
// console.log(firstName);
// console.log(lastName);


