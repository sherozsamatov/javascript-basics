// function maxOfTwo(a, b) {
//   if(a > b) console.log(a);
//   else if(b > a) console.log(b);
//   else console.log('numbers are equal');
// }

// function maxOfTwo(a, b) {
//   if(a > b) return a;
//   else if (a < b) return b;
//   else return 'numbers are equal'
// }


// function maxOfTwo(a, b) {
//   if(a == b) return 'numbers are equal';
//   if (a > b) return a;
//   return b;
// }

// function maxOfTwo(a, b) {
//   return (a > b) ? a : b;
// }


// console.log(maxOfTwo(15, 15));

// 2. FizzBuzz

// function FizzBuzz(input) {
//   if (input === 0) return input;
//   if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
//   if (input % 3 === 0) return 'Fizz';
//   if (input % 5 === 0) return 'Buzz';
//   if (typeof input !== 'number') return NaN;
//   return input;
// }

// const output = FizzBuzz(17);
// console.log(output);


// 3. Even and odd numbers

// function showNumbers(limit) {
//   for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');
//   }
// }


// showNumbers(20);


// 4. count truthy elements in an array
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) {
//     if(value) count++;
//   }

//   return count;

// }

// const myArray = [0, NaN, null, '', undefined, 1, 2, 3];

// console.log(countTruthy(myArray));




// 5. return the key-value pairs of an object that are of string type 
// const movie = {
//   title: 'Avatar',
//   releaseYear: 2009,
//   rating: 4.5,
//   director: 'James Cameron'
// }

// function showProperties(obj) {
//   for (key in obj) {
//     if(typeof obj[key] === 'string'){
//       console.log(key, obj[key]);
//     }
//   }

// }

// showProperties(movie);



