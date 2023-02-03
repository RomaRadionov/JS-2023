// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mix = ['srt', true, 34, -4, 'foo', 12, false, 12.58, 'abc'];
console.log('-------------Task1: Масиви та об\'єкти-------------');
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);
console.log(mix[5]);
console.log(mix[6]);
console.log(mix[7]);
console.log(mix[8]);
console.log(mix[0]);
console.log('Довжина масива ' + mix.length);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

console.log('-------------Task2: Масиви та об\'єкти-------------');
let book1 = {
    title: 'Мистецтво війни',
    pageCount: 231,
    genre: 'philosophy'
}
console.log(book1);
let book2 = {
    title: 'Іди туди, де страшно. І отримаєш те, про що мрієш',
    pageCount: 234,
    genre: 'psychology'
}
console.log(book2);
let book3 = {
    title: 'Фактор Черчилля. Як одна людина змінила історію',
    pageCount: 412,
    genre: 'Biographies and memoirs'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється масивом. Кожен автор має поля name та age.

console.log('-------------Task3: Масиви та об\'єкти-------------');
let book4 = {
    title: 'Мистецтво війни',
    pageCount: 231,
    genre: 'philosophy',
    authors:{
        name: 'Сунь-цзи',
        age: 55}
}
console.log(book4);
let book5 = {
    title: 'Іди туди, де страшно. І отримаєш те, про що мрієш',
    pageCount: 234,
    genre: 'psychology',
    authors:{
        name: 'Дж. Ловлесс',
        age: 55}
}
console.log(book5);
let book6 = {
    title: 'Фактор Черчилля. Як одна людина змінила історію',
    pageCount: 412,
    genre: 'Biographies and memoirs',
    authors:{
        name: 'Боріс Джонсон',
    age: 58}
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

console.log('-------------Task4: Масиви та об\'єкти-------------');
let users = [
    {name: 'name1', username: 'username1', password: 3454236342623},
    {name: 'name2', username: 'username2', password: '3453246523ere'},
    {name: 'name3', username: 'username3', password: 'dsfhgr4456ewr'},
    {name: 'name4', username: 'username4', password: '645vtergdaegg'},
    {name: 'name5', username: 'username5', password: 'evt54633cdr34'},
    {name: 'name6', username: 'username6', password: 'tertv544554vv'},
    {name: 'name7', username: 'username7', password: 'jkuilyt65tere'},
    {name: 'name8', username: 'username8', password: 'erer43tygferd'},
    {name: 'name9', username: 'username9', password: '12890kjfgdgdf'},
    {name: 'name10', username: 'username10', password: 'dfgasr34htjdf'}
];
console.log(typeof users[1].password);
console.log('password: ' + users[1].password);
console.log(Object.keys(users[5]));

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

console.log('-------------Task1: Логічні розгалуження-------------');
let x = 1;
if(x != 0){
    console.log('Невірно')
}else {
    console.log('Вірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

console.log('-------------Task2: Логічні розгалуження-------------');
let time = 34;
if (time >= 0 && time <= 15){
    console.log('Перша чверть години')
}else if (time >= 16 && time <=30) {
    console.log('Друга чверть години')
}else if (time >= 31 && time <= 45){
    console.log('Третя чверть години')
}else if (time >= 46 && time <= 59){
    console.log('Четверта чверть години')
}else {
    console.log('Невірна година')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log('-------------Task3: Логічні розгалуження-------------');
let day = 2;
if(day >= 1 && day <=10){
    console.log('Перша декада місяця')
}else if(day >= 11 && day <= 20){
    console.log('Друга декада місяця')
}else if(day >= 21 && day <= 31){
    console.log('Третя декада місяця')
}else {
    console.log('Невірний день')
}
// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('-------------Task4: Логічні розгалуження-------------');
// let weekday = +prompt('Введять день тижня');
let weekday = 2;
switch (weekday){
    case 1:
        // alert("Monday");
        console.log("Monday")
        break;
    case 2:
        // alert("Tuesday");
        console.log("Tuesday")
        break;
    case 3:
        // alert("Wendsday");
        console.log("Wendsday")
        break;
    case 4:
        // alert("Thursday");
        console.log("Thursday")
        break;
    case 5:
        // alert("Friday");
        console.log("Friday")
        break;
    case 6:
        // alert("Saturday");
        console.log("Saturday")
        break;
    case 7:
        // alert("Sunday");
        console.log("Sunday")
        break;
    default:
        alert('I dont\'t know such a day')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.

console.log('-------------Task5: Логічні розгалуження-------------');
// let enterNumber1 = +prompt('Enter number №1');
// let enterNumber2 = +prompt('Enter number №2');
let enterNumber1 = 23;
let enterNumber2 = 5;
if (enterNumber1 < enterNumber2){
    console.log('Максимальне число ' + enterNumber2)
}else if (enterNumber1 > enterNumber2){
    console.log('Максимальне число ' + enterNumber1)
}else if (enterNumber1 == enterNumber2){
    console.log('Числа однинакові')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і т.д. включно). Напишіть код який,
//         за допомоги оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибно подібні, тобто приводиться до false)

console.log('-------------Task6: Логічні розгалуження-------------');
let y = 0;
if (!!y == false){
    y = 'default'
    console.log(y)
}else {
    console.log(y)
}
//     - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

console.log('-------------Task7: Логічні розгалуження-------------');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}
