// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

console.log('-------------Task1-------------')
let say = 'hello'; console.log(say);
let say1 = 'owu'; console.log(say1);
let say2 = 'com'; console.log(say2);
let say3 = 'ua'; console.log(say3);
let num = 1; console.log(num);
let num1 = 10; console.log(num1);
let num2 = -999; console.log(num2);
let num3 = 123; console.log(num3);
let num4 = 3.14; console.log(num4);
let num5 = 2.7; console.log(num5);
let num6 = 16; console.log(num6);
let bol = true; console.log(bol);
let bol1 = false; console.log(bol1);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
console.log('-------------Task2-------------')
let firstName = 'Roman';
let middleName = 'Serhiyovych';
let lastName = 'Radionov';
let person = lastName + ' ' + firstName + ' ' + middleName; console.log(person);
let person1 = `${lastName} ${firstName} ${middleName}`; console.log(person1);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

console.log('-------------Task3-------------')
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt'om
// - За допомогою 3 х різних prompt() отримати 3 слова які являються вашими Ім'ям, По батькові та роками. та вивести в консоль
console.log('-------------Task4-------------')
let name = prompt('Your name:');
console.log('Ваше ім\'я ' + name);
let middleN = prompt('Your middle name:');
console.log('По-батькові ' + middleN);
let years = prompt('How old are you:');
console.log('Вам років ' + years);
let res = 'Вас звати ' + name + ' ' + middleN + ' і вам '+ years + ' років';
console.log(res);

