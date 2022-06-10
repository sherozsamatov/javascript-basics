// Lesson 6

// const in Javascript
// const нельзя изменить и всегда пишется с большой буквы
// если объект объявить ч-з const то его можно измнить.

// const PI = 3.14159;
// PI = 2.322;
// console.log(PI);

// let radius; // радиус
// let circumference; // длина окружности

// radius = prompt('Enter the radius of a circle: ');
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(radius, typeof radius);

// console.log('The circumference of a circle is', circumference);
// alert('The circumference of a circle is ' + circumference);


// Как решить эту задачу через функцию

// const PAI = 3.14159;

// function circumference(PI, radius) {
//   return  2 * PI * radius;
// }

// // let result = circumference(PAI, 5);
// // let result = circumference(PAI, 15);
// let result = circumference(PAI, 10);

// console.log(result);

// Math objects in Javascript

// let x = -3.14;
// let y = 5;
// let z = 11;
// let maximum;
// let minimum;

// x = Math.PI; // число Пи, константа
// x = Math.round(x); // округляет по общему математическому правилу
// x = Math.floor(x); // округляет в меньшую сторону
// x = Math.ceil(x); // округляет в большую сторону
// x = Math.pow(x, 5); // возвышает в степень (x **= 2; // x = x ** 2)
// x = Math.sqrt(x); // корень числа
// x = Math.SQRT2; // корень из 2
// x = Math.SQRT1_2; // корень из 1/2
// x = Math.abs(x); // модуль числа х

// console.log(x);

// maximum = Math.max(x, y, z); // возвращает число с макс. значением
// minimum = Math.min(x, y, z); // возвращает число с мин. значением


// console.log('Max value: ', maximum);
// console.log('Min value: ', minimum);

// x = 0.2;
// y = 0.4;

// console.log((x + y));
// console.log((x + y).toFixed(15));

// Задача

// let num1 = prompt('Enter side A of a right triangle: ');
// let num2 = prompt('Enter side B of a right triangle: ')

// function calcSqrt(a, b) {
//   return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// }

// let result = calcSqrt(num1, num2);

// console.log('Side C is: ', result);
// alert('Side C is: ' + result);


