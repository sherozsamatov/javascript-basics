// Exercises

// 1. Find max of two numbers

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




// 2. FizzBuzz

// const output = fizzBuzz();
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number")
//     return "Not a number";
//   if (input % 3 === 0 %% input % === 0)
//     return 'FizzBuzz'

//   if (input % 3 === 0)
//     return 'Fizz';
//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;

// }


// 3. Speed limit  = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> license suspended

// checkSpeed(180);

// function checkSpeed(speed) {
//   if (speed <= 70) return 'Ok'

// }


// 4. Even and odd numbers
// showNumbers(10);


// function showNumbers(limit){
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) return i, 'EVEN'
//     return i, 'ODD'
//   }

// }


// 5. count truthy

// const myArray = [0, null, undefined, '', 1, 2, 3, 'Sheroz'];
// console.log(countTruthy(myArray));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array){
//     if (value) count++;
//   }
//   return count;
// }


// 6. 

const movie = {
  title: 'Avatar',
  releaseYear: 2009,
  rating: 4.5,
  director: 'James Cameron'
}

let result = showProperties(movie);
console.log(result);

// function showProperties(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }