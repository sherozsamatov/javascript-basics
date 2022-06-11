// Previuos exercises

// // 1. задача
// let a = 300; // sec
// let b = 60; // 1 min = 60sec

// let result = a/b; // result in minutes

// // const min = 'min';

// console.log(result);

// // 1.1 задача
// let a = 19000; // sec
// let b = 3600; // 1 hr = 3600sec

// let c = a % b; // остаток

// let result = a / b; // result in hrs
// let result = Math.floor(a / b); // result in hrs

// console.log(result, 'hours', c, 'sec');

// let a = 7;
// let b = 5;
// let area = a + b/2;

// console.log(area);

// Exercise 1

/*
Create a function that takes a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false"
*/

// Solution 1

// function boolToString(flag) {
// 	return String(flag)
// }

// Solution 2
// function boolToString(flag) {
// 	return `${flag}`;
// }

// Solution 3
// function boolToString(flag) {
// 	return flag ? 'true' : 'false';
// }

// Solution 4
// function boolToString(flag) {
// 	return flag + '';
// }

// let a = boolToString(false);
// let b = boolToString(true);

// console.log(a, typeof a);
// console.log(b, typeof b);

// ***************** end of section ***************** //

// Exercise 2

// function profitableGamble(prob, prize, pay) {
// 	return prob * prize > pay;
// }

// let a = profitableGamble(0.2, 50, 9) //➞ true

// let b = profitableGamble(0.9, 1, 2) //➞ false

// let c = profitableGamble(0.9, 3, 2) //➞ true

// console.log(a, b, c);

// function makesTen(a, b) {

// }

// makesTen(9, 10) //➞ true

// makesTen(9, 9) //➞ false

// makesTen(1, 9) //➞ true

// ***************** end of section ***************** //

// Exercise 3
// Solution 1

// function divisible(num) {
// 	if (num % 100 === 0) console.log(true);
//   else console.log(false);
// }

// Solution 2
// function divisible(num) {
// 	return num % 100 === 0;
// 	// return 1 % 100 === 0;
// 	// return 1 === 0; // false
// }

// let a = divisible(1); //➞ false

// let b = divisible(1000); //➞ true

// let c = divisible(100); //➞ true

// console.log(a, b, c);

// function acceptIntoMovie(age, isSupervised) {

// }

// acceptIntoMovie(14, true) //➞ true

// acceptIntoMovie(14, false) //➞ false

// acceptIntoMovie(16, false) //➞ true

// 1-й случай
// let age = 16;
// let isSupervised = false;

// function acceptIntoMovie(age, isSupervised) {
//   if (age > 15 && isSupervised === false) // yes
//     return true;
//   else if (age > 15 && isSupervised === true) // no, discard later with else, returns true
//     return true;
//   else if (age < 15 && isSupervised === true) // yes
//     return true;
//   else if (age < 15 && isSupervised === false) // no, discard later with else, returns false
//   return false;
// }

// function acceptIntoMovie(age, isSupervised) {
//   return (age > 15) || isSupervised;
// }

// let x = acceptIntoMovie(14, true) //➞ true

// let y = acceptIntoMovie(14, false) //➞ false

// let z = acceptIntoMovie(16, false) //➞ true

// console.log(x, y, z);

// Find max of two numbers
// 1st implementation
// function maxOfTwo(a, b) {
//   if(a > b) console.log(a);
//   else if (b > a) console.log(b);
//   else console.log('Numbers are equal');
// }

// maxOfTwo(11, 11);

// 2nd implementation
// function maxOfTwo(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// function maxOfTwo(a, b) {
// if (a==b) return 'The numbers are equal'
//   else if (a > b) return a;
//   return b;
// }

// let number = maxOfTwo(214, 89);
// console.log(number);

// function maxOfTwo(a, b) {
//   return (a > b) ? a : b;
// }

// ***************** end of section *****************

// function findIndex(arr, str) {
//   for (key of findIndex) {
//     console.log(key);
//   }
// }

// let result = showProperties(movie);
// console.log(result);

// function showProperties(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }



// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") //➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") //➞ 1

// findIndex(["a", "g", "y", "d"], "d") //➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") //➞ 0


// **************** NEW SECTION START *******************
// How to calculate the number is even or odd
// 1st way.

// function calcEvenOdd(number) {
//   if(number % 2 == 0) {
//     console.log(number, 'EVEN');
//   }
//   else {
//     console.log(number, 'ODD');
//   }
// }

// calcEvenOdd(100);

// 2nd way.

// function calcEvenOdd(number) {
//   return (number % 2 === 0) ? `${number}, "EVEN"` : `${number}, "ODD"`
// }

// console.log(calcEvenOdd(99));


// function isSameNum (a, b) {
//   if(a === b) {
//     console.log(true);
//   }

//   else {
//     console.log(false);
//   }
// }

// isSameNum(2, 2)

// function isSameNum (a, b) {
//   return (a == b) ? true : false
// }

// console.log(isSameNum(2, 2));

// 

// function findLargest(a, b) {
//   if(a > b) {
//     console.log(`${a} is the largest number`);
//   }

//   else if (a < b) {
//     console.log(`${b} is the largest number`);
//   }

//   else {
//     console.log(`${a} is equal to ${b}`);
//   }
// }

// findLargest(29, 31);



// function findLargest(a, b) {
//   return (a > b) ? `${a} is the largest number` 
//   : (a < b) ?  `${b} is the largest number` 
//   : `${a} is equal to ${b}`
// }

// console.log(findLargest(5, 5));


// function isValidNumber(input) {
//   if(isNaN(input)){
//     console.log(`${input} is not a number`);
//   }
//   else {
//     console.log(`${input} is valid a number`);
//   }

// }

// function isValidNumber(input) {
//   if(Number.isNaN(input)){
//     console.log(`${input} is not a number`);
//   }
//   else {
//     console.log(`${input} is valid a number`);
//   }
// }

// isValidNumber(11) // 11 is a valid number
// isValidNumber('11') // '11 is a NOT valid number, it's a string
// isValidNumber(true) // true is a boolean
// isValidNumber('') // 11 is a valid number
// isValidNumber(17.5) // 11 is a valid number
// isValidNumber("asjhdasdw") // 11 is a valid number