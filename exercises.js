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

/******************** end of section ********************/
// Solution 3
// function boolToString(flag) {
// 	return flag ? 'true' : 'false';
// }


// Solution 4
function boolToString(flag) {
	return flag + '';
}

let a = boolToString(false);
let b = boolToString(true);

console.log(a, typeof a);
console.log(b, typeof b);


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


