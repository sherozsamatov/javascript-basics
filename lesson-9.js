// for loop


// let count = 1;

// while(count < 10) {
//   console.log('Hello, world!');
//   count++;
// }



// for (initialExpression; condition; incremenetExpression) {
//   statement;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log('Hello, world!', i);
// }


// for (let i = 10; i >= 1; i--) {
//   console.log('Hello, world!', i);
// }

// for (let i = 1; i <= 20; i++){
//   if(i % 2 === 0) console.log(i); // выводит на консоль четные числа между 1 и 20.
// }

// for (let i = 1; i <= 20; i++){
//   if(i % 2 !== 0) console.log(i); // выводит на консоль нечетные числа между 1 и 20.
// }


// break and continue
// for (let i = 1; i <= 20; i++){
//   console.log('Hello world!', i);
//   if (i === 5) break;
// }


// for (let i = 0; i < 10; i++){
//   if (i === 5) continue; // когда i будет равен 5, код не выполнится, но будет продолжаться со следующей итерации
//   console.log('Hello world!', i);
// }

// let names = ['John', 'Mary', 'Bob', 'Alice'];
// let names = ['John', 'Mary', 'Bob'];

// console.log(names[0]);

// for(let i = 0; i < 4; i++) {
//   console.log(names[i]);
// }

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for...of loop
// используется чтобы итерировать элементы массива
// for (let key of names) {
//   console.log(key);
// }



// for...in 
// используется чтобы итерировать элементы объекта


// const user = {
//   firstName: 'John',
//   lastName: 'Rambo',
//   age: 33,
//   isSoldier: true
// }

// console.log(user.age); // dot notation
// console.log(user['age']); // bracket notation



// for (key in user) {
//   console.log(key); // выводит на консоль свойства объекта.
// }

// for (key in user) {
//   console.log(user[key]); // выводит на консоль значение объекта.
// }





// также можно использовать для массива
// Пример

// let names = ['John', 'Mary', 'Bob', 'Alice'];

// console.log(names[1]);

// for (let key in names) {
//   console.log(key); //  выводит на консоль индексы массива.
// }

// for (let key in names) {
//   console.log(names[key]); // выводит на консоль элементы массива.
// }


// for (let key in names) {
//   console.log(key, names[key]); // выводит на консоль индексы и элементы массива.
// }


function word(s) {
  switch(s) {
    case 'one':
      console.log(1);
      break;
      case 'two':
      console.log(2);
      break;
      case 'three':
      console.log(3);
      break;
      case 'four':
      console.log(4);
      break;
      case 'five':
      console.log(5);
      break;
      case 'six':
      console.log(6);
      break;
      case 'seven':
      console.log(7);
      break;
      case 'eight':
      console.log(8);
      break;
      case 'nine':
      console.log(9);
      break;
      case 'zero':
      console.log(0);
      break;
      default:
      console.log('Not a number from this list')
      
  }
}

word("one") //➞ 1

word("two") //➞ 2

word("nine") //➞ 9