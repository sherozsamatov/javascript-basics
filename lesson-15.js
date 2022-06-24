// 1. Стрелочные функции

// function funcName(a, b) {
//   return a + b;
// }

// let sum = funcName(3, 4);
// console.log(sum);


// Как создать стрелочную функцию
// let message = (firstName) => {
//   console.log('Hello ' + firstName);
// };

// message('John');

// Синтаксис стрелочной функции
// () => {...} // без параметра
// param1 => {...} // только один параметр
// (param1, param2) => {...} // несколько параметров

// Примеры
// 1-й 
// let addNum = (a, b) => {
//   return a + b;
// }

// console.log(addNum(3, 9));

// 2-й
// let increment = a => {
//   return a + 5;
// }

// let increment = a => a + 5;

// console.log(increment(6));

// 3-й способ
// let addNum = (a, b) => a + b;
// console.log(addNum(5, 3));

// let message = firstName => "Hello" + firstName;
// let message = firstName => `Hello ${firstName}`;

// console.log(message('John'));


// Стрелочная без параметра
// 1-й вариант написания
// let greet = () => "Hello World!"
// console.log(greet());


// 2-й вариант написания
// let greet = _ => "Hello World!"
// console.log(greet());




// ***************** NEW SECTION START ******************
// 2. Random number generator in JavaScript


// let N = 10;
// let randomNum = Math.floor(Math.random()*N + 1);
// console.log(randomNum);

// min = 0;
// max = 1




// function numberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let result1 = numberInRange(15, 50);
// let result2 = numberInRange(15, 50);
// let result3 = numberInRange(15, 50);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// function randomPassword(length) {
//   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let password = '';
//   for(let i = 0; i < length; i+=1) {
//     let index = Math.floor(Math.random() * characters.length);
//     password = password + characters[index];
//   }
//   return password;
// }

// console.log(randomPassword(12));

// function randomArray(min, max, length) {
//   let arr = [];
//   for(let i = 0; i < length; i++) {
//     let number = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(number);
//   }
//   return arr;
// }


// let result = randomArray(1, 100, 10); // this must return an array of 10 random numbers between 1 and 100

// console.log(result);
// console.log(...result);


