// 1. Object methods. Method calls.

// let person = {
//   firstname: 'Steve',
//   lastname: 'Jobs',
//   fullName: function() {
//     console.log('Hello, World!');;
//   }
// }


// let console = {
//   log: function() {

//   }
// }


// console.log(person.firstname);

// person.fullName();
// console.log();



// 2. Callback functions

// // 1st way
// let callback = function() {
//   console.log('Done!');
// }

// setTimeout(callback, 5000);


// // 2nd way
// setTimeout(function() {
//   console.log('Done!');
// }, 5000);

// function useCallback(callback) {
//   callback(1);
//   callback(2);
//   callback(3);
// }

// function callback(sentence) {
//   // TODO: print out sentence
//   console.log(sentence);
// }

// // TODO: execute useCallback with the callback as the argument
// useCallback(callback);


// function calculate(num1, num2, callbackFunction) {
//   callbackFunction(num1, num2);
// }

// function add(a, b) {
//   console.log(a + b);
// }

// function subtract(a, b) {
//   console.log(a - b);
// }

// // TODO: Call the calculate function two times and give two numbers for a and b as arguments
// // and add, subtract as third arguments

// calculate(8, 3, add);
// calculate(8, 3, subtract);

