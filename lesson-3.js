// 3-й урок
// 10.2 Операторы присвоения и равенства
// let x = 1; // присвоение

// Три равенства (===) означает что, значения и тип данных должны быть одинаковыми одновременно
// console.log(1 === 0); // false
// console.log(1 === 1); // true
// console.log(1 === '1'); // false
// console.log('1' === 1); // false

// Два равенства (==) означает что, значения должны быть одинаковыми 
// console.log('1' == 1); // true
// console.log('1' == '1'); // true
// console.log('Davlat' == 'Doni'); // false
// console.log('Davlat' == 'Davlat'); // true
// console.log(1 == 1); // true
// console.log(true == true); // true
// console.log(true == false); // false


// 12. Logical operators
// 12.1 Logical AND (&&) operator
// returns true if both operands are true or evaluate to true
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// 12.2 Logical OR (||) operator
// returns true if either of the operands is true or evaluates to true 
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log(false || 0); // Kamol
// console.log(false || 1); // 1
// console.log(false || null); // 
// console.log(false || undefined); // 
// console.log('1' == '1'); // true
// console.log('Davlat' == 'Doni'); // false
// console.log('Davlat' == 'Davlat'); // true
// console.log(1 == 1); // true
// console.log(true == true); // true
// console.log(true == false); // false


// Также можно сравнить разные типы данных
// console.log(1 == true); // true
// console.log(0 == true); // false
// console.log('1' == true); // true
// console.log('0' == true); // false
// console.log('Text' == true); // false
// console.log('Text' == false); // false
// console.log('' == true); // false
// console.log('' == false); // true

// 12.3 Falsy and Truthy

// Falsy values
// 1. false
// 2. null
// 3. undefined
// 4. ''
// 5. NaN // Not a Number
// 6. 0

// Truthy - if not Falsy, then it is Truthy

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);



// 12.4 Логическое отрицание, или не равно (!==) проверяет равенство на правдивость

// console.log(1 !== 1); // false
// console.log(0 !== 1); // true
// console.log(true !== false); // true
// console.log(true == !false); // true
// console.log(true !== false); // true
// console.log(true !== !false); // false

// console.log(1 != 1); // false
// console.log(0 != 1); // true
// console.log(true != false); // true
// console.log(true = !false); // true
// console.log(true != false); // true
// console.log(true != !false); // false

// let highIncome = true;
// let goodCreditScore = false;

// let eligibleForLoan = highIncome || goodCreditScore; // false

// let applicationRefused = !eligibleForLoan;

// console.log('Eligibility: ', eligibleForLoan);
// console.log('Application refused: ', applicationRefused);


// 12.5 Операторы сравнения

// let x = 1;

// console.log(x > 1); // больше чем, returns false
// console.log(x < 1); // меньше чем, returns false
// console.log(x >= 1); // больше или равно, returns true
// console.log(x <= 1); // меньше или равно, returns true
// console.log(2 <= 1); // меньше или равно, returns false



// 12.6 Приоритет выполнения операций
// Перейдите по ссылке ниже
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80


// console.log(3 + 4 * 5); // 3 + 20
// // expected output: 23

// console.log(4 * 3 ** 2); // 4 * 9
// // expected output: 36

// console.log((3 + 4 )* 5); // 7 * 5
// // expected output: 35

// let a;
// let b;

// console.log(a = b = 5);
// // expected output: 5



// 12.7 Adding different types of variables 
// let x = 4;
// let y = '5';
// // let x = 'Sheroz';
// // let y = 'Samatov';

// // console.log(x, typeof x);
// // console.log(y, typeof y);

// console.log(x + ' ' + y); // '4 5'
// console.log(x + y); // 45
// console.log(x * y); // 20


