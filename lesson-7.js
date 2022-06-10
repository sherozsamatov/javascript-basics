// Lesson 7

// 1. If/else statements


// If else syntaxis
// if(condition){
//   statement
//   if(condition2) {
//   }
// }
// else if (anotherCondition){
//   statement
// }
// else if (yetAnotherCondition){
//   statement
// }
// else {
//   statement
// }

// Если время суток между 6 утра и 12 дня: Доброе утро!
// Если время суток между 12 дня и 6 вечера: Добрый день!
// Если время суток между 6 вечера и 12 ночи: Добрый вечер!
// В остальных случаях: Спокойной ночи!

// let hour = 1;

// if (hour >= 6 && hour < 12) { // время между 6 утра и 12 дня
//   console.log('Good morning');
// }

// else if (hour >= 12 && hour < 18) {
//   console.log('Good afternoon');
// }

// else if (hour >= 18 && hour < 24) {
//   console.log('Good evening');
// }

// else {
//   console.log('Good night');
// }

// If there's only only one condition inside the curly braces, 
// the curly braces can be optionally left out. E.g. below

// let hour = 24;

// if (hour >=6 && hour < 12) console.log('Good morning');

// else if (hour >=12 && hour < 18) console.log('Good afternoon');

// else if (hour >=18 && hour < 24) console.log('Good evening');

// else console.log('Good night');

// ***************** end of section *****************



// function myFunction(month) {

//   if (month == 1) {
//     return 'Jan';
//   } else if (month == 2) {
//     return 'Feb';
//   } else if (month == 3) {
//     return 'Mar';
//   } else if (month == 4) {
//     return 'Apr';
//   } else if (month == 5) {
//     return 'May';
//   } else if (month == 6) {
//     return 'Jun';
//   } else if (month == 7) {
//     return 'Jul';
//   } else if (month == 8) {
//     return 'Aug';
//   } else if (month == 9) {
//     return 'Sep';
//   } else if (month == 10) {
//     return 'Oct';
//   } else if (month == 11) {
//     return 'Nov';
//   } else if (month == 12) {
//     return 'Dec';
//   } else {
//     return 'Invalid month';
//   }
// }

// let monthNum = prompt('Enter month number: ');

// let result = myFunction(monthNum);
// console.log(result);

// ***************** end of section *****************



// 2. Ternary operators
// Тернарные операторы
// For example:
// если у клиента более 100 баллов, то он 'золотой' клиент,
// если меньше 100 баллов, то он 'серебрянный' клиент

// syntaxis
// (condition) ? statement : statement;
// (condition) ? statement : anotherStatement : yetAnotherStatement :  statement;

// ? - 'if' condition is true
// : - 'else' or 'else if' condition is true, or the first condition is false

// let points = 90;

// let customerType = (points > 100) ? 'gold' : 'silver';

// console.log(customerType, typeof customerType);


// let speed = 80;
// let message = (speed >= 120) ? 'Too Fast' : (speed >= 80) ? 'Fast' : 'OK';

// console.log(message);

// ***************** end of section *****************




// 3. Switch, case, break, default
// Same as if, but with many 'else if's

// let userRole = 'admin';

// switch (userRole) {
//   case 'guest':
//     console.log('Guest user');
//     break;

//   case 'moderator':
//     console.log('Moderator user');
//     break;

//   case 'admin':
//     console.log('Admin user');
//     break;

//   // it's like else
//   default:
//     console.log('Unknown user');
// }

// ***************** end of section *****************


// let userRole = 'guest';

// if (userRole == 'guest') {
//   console.log('Guest user');
// }
// else if (userRole === 'moderator') {
//   console.log('Moderator user');
// }
// else if (userRole === 'admin') {
//   console.log('Admin user');
// }

// else {
//   console.log('Unknown user');
// }




// let grade = 90;

// switch (true) {
//   case grade >= 90:
//     console.log('You did great!');
//     break;

//   case grade >= 80:
//     console.log('You did good!');
//     break;

//   case grade >= 60:
//     console.log('You passed ... barely');
//     break;

//   case grade < 60:
//     console.log('You FAILED!');
//     break;

//   default:
//     console.log(grade, 'is not a grade letter!');
// }

// ***************** end of section *****************


// this is saving our input to a variable
// это сохраняет что вводит пользователь в переменную monthNum
// let monthNum = prompt("Enter month number: "); 
// monthNum = Number(monthNum); // преобразует вводимое в число
// myFunction(monthNum);

// function myFunction(month) {
// 	switch (month) {
// 		case 1:
// 			console.log("Jan");
// 			break;
// 		case 2:
// 			console.log("Feb");
// 			break;
// 		case 3:
// 			console.log("Mar");
// 			break;
// 		case 4:
// 			console.log("Apr");
// 			break;
// 		case 5:
// 			console.log("May");
// 			break;
// 		case 6:
// 			console.log("Jun");
// 			break;
// 		case 7:
// 			console.log("Jul");
// 			break;
// 		case 8:
// 			console.log("Aug");
// 			break;
// 		case 9:
// 			console.log("Sep");
// 			break;
// 		case 10:
// 			console.log("Oct");
// 			break;
// 		case 11:
// 			console.log("Nov");
// 			break;
// 		case 12:
// 			console.log("Dec");
// 			break;

// 		default:
// 			console.log("Enter a valid month number");
// 	}
// }

// ***************** end of section *****************

