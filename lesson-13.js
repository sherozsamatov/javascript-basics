// ***************** index.js *****************
// Lesson 28 -  JavaScript var vs let
// variable scope = where a variable is accessible

// область видимости переменной = где переменная доступна

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// let = переменные ограничены внутри блока {}
// var = переменные ограничены внутри функции function(){}


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


// JavaScript sort an array of strings
// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort();
// //fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }




// 2D array = An array of arrays

// let fruits =           ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats =         ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }
