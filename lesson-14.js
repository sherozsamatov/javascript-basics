// let sum = 0;
// for(let i = 1; i <= 100; i+=1){
//   sum += i; //sum = sum + i;
// }
// console.log(sum);


// function sumOfNumber(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i += 1) {
//     sum += i; //sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumOfNumber(1, 100));


// function factorial(a, b) {
//   let multiply = 1;
//   for (let i = a; i <= b; i += 1) {
//     multiply *= i; //multiply = multiply * i;
//   }
//   return multiply;
// }

// console.log(factorial(1, 10));

// let string = 'Next Generation';
// console.log(string.charAt(0)); // это печатает первую букву строки
// console.log(string.charAt(string.length - 1)); // это печатает последнюю букву строки

// for (let i = 0; i < string.length; i+=1) {
//   console.log(string.charAt(i));
// }

// for(letter of string) {
//   console.log(letter);
// }



// ************ Functions (...continued) **************
// Return statement


// function saySomething(message) {
//   // если не аргумента, то функция ничего не делает
//   if(!message) {
//     return;
//   }
//   console.log(message);
// }

// // saySomething('Hello, students!'); // в данном случае работает нормально
// saySomething(); // ничего не возвращает из-за if утверждения



// function addNumbers() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i += 1) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(addNumbers(1, 2, 3)); // 6
// console.log(addNumbers(1, 2, 3, 4, 5, 6)); // 21


// Rest parameters

let x = 1;
let y = 2;
let z = 3;
let k = 4;
let m = 5;



// function sum(a, b) {
//   return a + b;
// }


// function sum(a, b, c) {
//   return a + b + c;
// }

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(sum(x, y, z, k));

// function sum(...numbers) {

//   let total = 0;
//   for(number of numbers) {
//     total += number;
//   }
//   return total + x + y;
// }

// console.log(sum(x, y, z, k, m));





