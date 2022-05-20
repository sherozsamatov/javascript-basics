// 1-й урок
// 1. Single line comment example (Пример однострочного комментария)

/* 2. Multi line comment example (Пример многострочного комментария)
Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. 
Aut soluta quam neque, est quasi a provident ipsa, 
nam delectus sed perferendis amet possimus ipsam molestias?
 */

// 3. How to print to console. My first program.(Как печатать на консоль. Моя первая программа.)
// console.log('Hello, World!')


// 4.1 Variables. 'let' and camelCase example (Переменные. 'let' и пример camelCase)
// let lastName = 'Samatov'; // объявление переменного через 'let'
// lastName = 'Tulqinjonov'
// console.log(lastName);

// 4.2 Variables const
// const lastName = 'Samatov'; // объявление переменного через 'const'
// lastName = 'Tulqinjonov' // this is an error, cannot reassign 'const' variable (это ошибка, невозможно переназначить переменную 'const')
// console.log(lastName);


// // 5. Concatenation, two ways to do it.(Конкатенация, связывание текста. Два способа сделать это)
// const firstName = 'Doniyor';
// const lastName = 'Akbarov'
// console.log('My name is ' + firstName + ' ' + lastName); // 1st way to do it
// console.log('My name is', firstName, lastName); // 2nd way to do it
// console.log(`My name is ${firstName} ${lastName}`); // 3rd way to do it (with backtick - через обратную галочку)

// 6. Variables - Primitives/Value Types - Примитивы
// let firstName = 'Doniyor'; // 1. string (текстовая строка)
// const birthYear = 2008; // 2. number (число)
// let isAdult = false; // 3. boolean type (логическое значение), 1. true - истина, pravda 2. false - lozh
// let selectedColors = null; // 4. null - нуль, нулевой, пустой
// let lastName = undefined; // 5. undefined - неопределенный

// console.log('This is', typeof firstName, 'type');
// console.log(typeof birthYear);
// console.log(typeof isAdult);
// console.log(typeof selectedColors);
// console.log(typeof lastName);

// console.log('My name is', firstName, 'and I am', age, 'years old.');

// 7. Alert popup example
// window.alert('My name is Sheroz Samatov')

// 8. Prompt and alert example (These work only in the browser) Пример подсказки и оповещения (работают только в браузере)

// let lastName = window.prompt('Enter your name: ')

// window.alert('Your name is ' + lastName)

// console.log('Your name is ' + lastName);

// 9. Bonus. Манипулярование DOM елементами
// let firstName = 'Doniyor'; // 1. string (текстовая строка)
// const birthYear = 2008; // 2. number (число)
// let isStudent = true; // 3. boolean type (логическое значение), 1. true - истина, pravda 2. false - lozh
// let selectedColors = null; // 4. null - нуль, нулевой, пустой
// let lastName = undefined; // 5. undefined - неопределенный

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You were born in " + birthYear;
// document.getElementById("p3").innerHTML = "Student: " + isStudent;

// document.write(`<h1>Hello ${firstName} you were born in ${birthYear}, student: ${isStudent}</h1>`)
