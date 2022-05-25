// 5-й урок

// Reference Types

// 1. Object. e.g Person object
// let myName = 'Sheroz';
// let surname = 'Samatov';
// let age = 18;
// let favouriteColor = 'Blue';
// let isProgrammer = true;
// let speaksEnglish = true;

// myName = 'Doniyor';


// Person object.
// Key-value pairs - пара ключ-значение, пара свойство-значение

// let myObject = {
//   name: 'Sheroz',
//   surname: 'Samatov',
//   age: 18,
//   favouriteColor: 'Blue',
//   isProgrammer: true,
//   speaksEnglish: true
// }

// console.log(myObject);

// How to access object properties
// Dot notation
// console.log(myObject.isProgrammer);

// Bracket Notation
// console.log(myObject['isProgrammer']);

// let key = 'isProgrammer';
// console.log(myObject[key]);



// How to access or reassign object elements
// myObject.surname = 'Masejonov';

// console.log(myObject.surname);

// myObject.language = 'English';

// console.log(myObject.language);

// console.log(myObject);


// let person = new Object;

// person.name = 'Azizbek';
// person.age = 13;

// console.log(person, typeof person);

// 2. Arrays - Массивы или Список
// let colors = [];  
// let colors = ['red', 'green', 'blue']; 
// let colors = ['red', 'green', 'blue', true, NaN, null, undefined, 23];  

// console.log(colors, typeof colors);

// colors[3] = 'black';
// colors[0] = 'pink';

// console.log(colors.length);



// console.log(colors);

// let myArray = [];

// myArray[0] = 'John';
// console.log(myArray, typeof myArray);


// 3. Function -  функции

// 3.1 Выполняет что-то


// function myFunction(name, surname) {
//   console.log('Hello, ' + name + ' ' + surname);
// }

// myFunction('Doni', 'Akbarov')


// let a = 'Doni';
// let b = 'Akbarov';

// function myFunction(name, surname) {
//   console.log('Hello, ' + name + ' ' + surname);
// }

// myFunction(a, b)



// let a = prompt('Enter your name: ');
// let b = prompt('Enter your surname: ');



// let funcName = function myFunction(name, surname) {
//   console.log('Hello, ' + name + ' ' + surname);
// };

// funcName(a, b);

// console.log(typeof funcName);



// Функции можно вызвать по несколько раз с разными аргументами
// function myFunction(myName, mySurname) {
//   console.log('Hello, ' + myName + ' ' + mySurname);
// }

// myFunction('Doniyor', 'Akbarov');
// myFunction('Mashhur', 'Masejonov');
// myFunction('Kamol', 'Sobirov');


// let myVar = function myFunction(name, surname) {
//   console.log('Hello, ' + name + ' ' + surname);
// }

// myVar('Doniyor', 'Akbarov');
// myVar('Mashhur', 'Masejonov');
// myVar('Kamol', 'Sobirov');


// console.log(myVar, typeof myVar);




// 3.2 Вычисляет что-то и возвращает значение этого выражения. 
// Например: вычисляет квадрат числа

// function myFunction(number) {
//   return number * number;
// }

// myFunction(3); // ничего не показывает

// console.log(myFunction(4));

// let calcNum = myFunction(4);

// console.log(calcNum);

// function myFunction(num1, num2) {
//   return num1 ** num2;
// }

// let calcNum = myFunction(3, 4);

// console.log(calcNum);


