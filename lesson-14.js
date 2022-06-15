// *****************  Functions (continued) *****************
// return statement 

// function say(message) {
  // show nothing if the message is empty
//   if (! message ) {
//       return;
//   }
//   console.log(message);
// }

// say(); // when a function is called with no arguments, it returns nothing because of the if statement
// say('Hello'); // but it works normally with an argument



// The arguments object

/* 
Внутри функции вы можете получить доступ к объекту с именем arguments, 
который представляет именованные аргументы функции.

Объект arguments ведет себя как массив, хотя он не является экземпляром типа Array.
 */

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//   }
//   return sum;
// }

// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3, 4, 5)); // 15






// 1. Rest Parameters
// rest parameters = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}


// JavaScript callback functions tutorial example explained

// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// let total = sum(2, 3);
// displayConsole(total);


// let total = sum(2, 3);
// displayConsole(total);

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output){
//   document.getElementById("myLabel").innerHTML = output;
// }


// Callback example


// sum(2, 3, displayConsole);

// function sum(x, y, callBack){
//   let result = x + y;
//   callBack(result);
// }

// function displayConsole(output){
//   console.log(output);
// }

// function displayDOM(output){
//   document.getElementById("myLabel").innerHTML = output;
// }





// ***************** index.js *****************
// Lesson 30 -JavaScript format currency


// let myNum = 123456.789;

// myNum = myNum.toLocaleString('en-US'); // US english
// myNum = myNum.toLocaleString('ru'); // Russian
// myNum = myNum.toLocaleString('uz'); // Uzbek
// myNum = myNum.toLocaleString('hi-IN'); // Hindi
// myNum = myNum.toLocaleString('de-DE'); // standard German
// myNum = myNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // the number is rounded to .79 in the end
// myNum = myNum.toLocaleString('ru', {style: 'currency', currency: 'RUB'}); // the number is rounded to .79 in the end
// myNum = myNum.toLocaleString('uz', {style: 'currency', currency: 'UZS'}); // the number is rounded to .79 in the end
// myNum = myNum.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'}); // the number is rounded to .79 in the end
// myNum = myNum.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}); // the number is rounded to .79 in the end

// console.log(myNum);


// let myNum = 101;

// myNum = myNum.toLocaleString(undefined, {style: 'percent'});
// myNum = myNum.toLocaleString(undefined, {style: 'unit', unit: 'celsius'});

// console.log(myNum);

// ***************** index.js *****************
// Lesson 32 - JavaScript temperature conversion program. Celcius and Fahrenheit

// 1. the logic behind the program

// let temp = 32;
// temp = toFahrenheit(temp);
// console.log(temp);

// function toCelsius(temp){
//   return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//   return temp * 9 / 5 + 32;
// }


// 2. The actual program in the HTML

// document.getElementById("submitButton").onclick = function(){

//   let temp;

//   if(document.getElementById("cButton").checked){
//       temp = document.getElementById("textBox").value;
//       temp = Number(temp);
//       temp = toCelsius(temp);
//       document.getElementById("tempLabel").innerHTML = temp + "°C";
//   }
//   else if(document.getElementById("fButton").checked){
//       temp = document.getElementById("textBox").value;
//       temp = Number(temp);
//       temp = toFahrenheit(temp);
//       document.getElementById("tempLabel").innerHTML = temp + "°F";
//   }
//   else{
//       document.getElementById("tempLabel").innerHTML = "Select a unit";
//   }
// }

// function toCelsius(temp){
//   return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//   return temp * 9 / 5 + 32;
// }

/*
hmtl
  <label>Enter a temperature:</label><br>
  <input type="text" id="textBox"><br>

  <label>convert to:</label><br>
  <input type="radio" id="cButton" name="unit">
  <label>Celsius</label><br>
  <input type="radio" id="fButton" name="unit">
  <label>Fahrenheit</label><br>

  <button type="button" id="submitButton">submit</button><br>
  <label id="tempLabel"></label>
*/
