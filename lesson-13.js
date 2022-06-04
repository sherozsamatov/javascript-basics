// ***************** index.js *****************
// Lesson 28 -  JavaScript var vs let
// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}


// 1. in this case i only exists within the for loop
// if variable i is accessed outside the for loop, 
// the interpreter doesn't know what i is, so it's returns undefined

// for(let i = 1; i <= 3; i+=1){
// console.log(i);
// }


// console.log(i);


// 2. if the variable is declared with 'var' keyword, then it is accessible outside of the for loop's scope, 
// which is calculated to be 4 in this example.
// this can be a problem!

// for(var i = 1; i <= 3; i+=1){
//   console.log(i);
// }

// console.log(i);


// 3. any variable declared with var doesn't exist outside of a function.
// doSomething();

// function doSomething() {
//   for (var i = 1; i <= 3; i += 1) {
//     console.log(i);
//   }
// }

// console.log(i); // this returns 'Uncaught reference error: i is not defined'

// so to sum it up, var can escape a {} in a block of code, but cannot escape a function, 
// i.e is not accessible outside a function


// 4. Global variables = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// a) 
// if var is declared as a global variable it can potentially change browser window properties
// in this case, it will change the 'name' window property of the browser!
// you can check it by writing 'window' in the console

// var name = 'Sheroz'; 

// b)
// this behavior can be avoided when declaring a global variable with the 'let' keyword
// that's why it's always recommended to always declare variable with 'let'

// let name = 'Sheroz';

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

