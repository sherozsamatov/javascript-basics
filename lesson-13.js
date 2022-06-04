// Lesson 13
// var vs let. The difference between var and let

// const firstName = 'Mashhur';
// firstName = 'Kamol';
// console.log(firstName);

// const myObj = {
//   name: 'Sheroz',
//   surname: 'Samatov'
// }

// // myObj.name = 'Kamol';

// myObj = {};

// console.log(myObj);

// Variable scope - область видимости переменной

// let = переменные ограничены внутри блока {}
// var = переменные ограничены внутри функции function(){}

// 1. let существует только внутри этого цикла,
//  мы не можем получить доступ к i 
// вне этого блока кода

// for(let i = 1; i <= 3; i+=1) {
//   console.log(i);
// }

// console.log(i);


// 2. переменные объявленные с var могут 'избегать' фигурных скобок и работать вне блока кода
// в данном случае, i будет равен 4. 
// это может привести к проблемам с нашим кодом.

// for(var i = 1; i <= 3; i+=1) {
//   console.log(i);
// }

// console.log(i);

// 3. переменные объявленные с var не могут существовать вне функции.

// function anyFunction() {
//   for (var i = 1; i <= 3; i += 1) {
//     console.log(i);
//   }
// }

// console.log(i);

// 4. Глобальные переменные

// let name = 'Mashhur';


// a) Глобальные переменные объявленные с var могут изменить свойства браузера

// var document = 'Mashhur';

// б) Эту проблему можно избегать если объявить 
// глобальные переменные с помощью ключевого слова 'let'

// let name = 'Mashhur';



// Arrays methods - Метдоы для работы с массивами (список)

// let fruits = ['apple', 'banana', 'strawberry'];

// fruits.push('lemon'); // это добавляет новый элемент в конце массива
// // fruits.pop();
// fruits.unshift('mango');
// fruits.shift()

// console.log(fruits);

// let arrayLength = fruits.length;
// console.log(arrayLength); 


// let index = fruits.indexOf('strawberry');
// let index = fruits.indexOf('kiwi'); // если такого элемента нету в массиве, то возвращает -1
// console.log('Index of strawberry is: ', index);

// console.log(fruits[0]);


// let numbers = [12, 120, 5, 10, 18, 37, 50];

// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


// for(let i = numbers.length - 1; i >= 0 ; i--) {
//   console.log(numbers[i]);
// }

// for ... of

// for(let number of numbers){
//   console.log(number);
// }



// let fruits = ['kiwi', 'lemon', 'mango', 'apple', 'banana', 'strawberry'];

// // fruits.sort(); // сортирует элементы массива по алфавитному порядку
// fruits.sort().reverse(); // сортирует элементы массива по алфавитному порядку наоборот

// // console.log(fruits);

// for (let fruit of fruits) {
//   console.log(fruit);
// }



// 2D arrays - 2-х мерные массивы
// Массивы внутри массива

// let fruits =      ['apple',   'banana', 'strawberry'];
// let vegetables =  ['carrots', 'onions', 'potatoes'];
// let meats =       ['chicken', 'beef',   'fish'];

// let groceriesList = [fruits, vegetables, meats];

// console.log(groceriesList[1][2]);

// for (let list of groceriesList){
//   for (let food of list) {
//     console.log(food);
//   }
// }



// Spread operator in Javascript

// '...' три точки. Оператор расширения расширяет массив.


// let numbers = [12, 120, 5, 10, 18, 37, 50];

// console.log(...numbers);

// console.log('The largest number in this array is: ', Math.max(...numbers));


// let class1 = ['Spongebob', 'Patrick', 'Sandy']
// let class2 = ['Squidward', 'Mr. Krabs', 'Plankton']

// class1.push(class2);
// class1.push(...class2);

// console.log(class1);















