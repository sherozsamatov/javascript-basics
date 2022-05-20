// 4-й урок

// 13 Как преобразовать переменную из одного типа в другую

// let age = prompt('How old are you? ');

// console.log(typeof age);

// age = Number(age);
// console.log(typeof age);
// age += 1; // age = age + 1

// console.log('Happy birthday! You are', age, 'years old');
// alert('Happy birthday! You are ' + age + ' years old');

let x = '456';
let y = 3.14159;
let z = 1;

x = Number(x); // преобразует тип из текстовой в числовую
y = String(y);
z = Boolean(z);


// let x;
// let y;
// let z;

// x = Number('456'); // преобразует тип из текстовой в числовую
// y = String(3.14159);
// z = Boolean(1);

// x = Number(false); // преобразует тип в числовую
// y = String(true); // 'true'
// z = Boolean('Jonibek'); // true


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);



// let x = '12'; // string
// let y = 3.14159; // number
// let z = 0; // number

// x = Number(x);
// console.log(x, typeof x);

// y = String(y)
// console.log(y, typeof y); 

// z = Boolean(z);
// console.log(z, typeof z);


// let a = '14'; // string
// console.log(a, typeof a);

// a = Number(a); // преобразует в числовой тип

// let newVar = Number(a);
// console.log(newVar, typeof newVar);

// 14 Как принимать данные от пользователя и вывести в окно

// 1-й способ

// let age = prompt('How old are you?');

// console.log(age, typeof age);

// age = Number(age);
// age += 1;
// console.log(age, typeof age);
// alert('You are ' + age + ' years old');

// let userName = window.prompt('Enter your name: '); // window. можно не писать
// console.log(userName);


// let x = window.prompt('Enter a number: ');
// console.log(x + 2, typeof x);
// x = Number(x);
// console.log(x + 2, typeof x);

// // Как вывести в окно (alert window)
// window.alert(x);



// let myName = 'Sheroz';
// let text = 'default';
// let userName = window.prompt('Enter your name: ');
// let userName1 = window.prompt(myName, 'Your name is: ');
// let userName2 = window.prompt('Enter your name', text);
// console.log(userName1);

// window.alert(userName2);

// 2-й способ, более сложный

// let userName;

// document.getElementById('myButton').onclick = function(){
//   userName = document.getElementById('myInput').value;
//   console.log(userName);
//   document.getElementById('myLabel').innerHTML = "Hello " + userName;
// }

// html code
/*
  <label id="myLabel" for="">Enter your name: </label><br>
  <input type="text" id="myInput"><br>
  <button id="myButton" type="button">Submit</button>
*/

// // Exercise. 

// let a = 'red';
// let b = 'blue';

// let c = a;

// a = b;
// b = c;

// console.log(a);
// console.log(b);

