console.log('-------------Task1: Array functions-------------');
// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(`${str1} - ${str1.length}`);
console.log(`${str2} - ${str2.length}`);
console.log(`${str3} - ${str3.length}`);

console.log('-------------Task2: Array functions-------------');
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

console.log('-------------Task3: Array functions-------------');
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

console.log('-------------Task4: Array functions-------------');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   ';
console.log(str7.trim());
console.log(str7.trimEnd());
console.log(str7.trimStart());

console.log('-------------Task5: Array functions-------------');
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str8 = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ')
}
console.log(stringToArray(str8));

console.log('-------------Task6: Array functions-------------');
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let toStr = arr1.map(n => n.toString());
console.log(toStr);
console.log(typeof toStr[0]);

console.log('-------------Task7: Array functions-------------');
// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//   або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
function sortNums(arr, direction) {
    if (direction === 'ascending') {
        return  arr.sort(function(a, b){return a-b})
    }
    if (direction === 'descending') {
        return  arr.sort(function(a, b){return b-a})
    }
}
console.log(sortNums(nums, 'descending'));

console.log('-------------Task8: Array functions-------------');
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
function sortMinToMax(arr) {
    return arr.sort(function (a, b){return a.monthDuration-b.monthDuration})}
console.log(sortMinToMax(coursesAndDurationArray));
// -- відфільтрувати , залишивши тільки курси з тривалістю понад 5 місяців
function filterMoreFive(arr) {
    return arr.filter(function (arr){return arr.monthDuration > 5})
}
console.log(filterMoreFive(coursesAndDurationArray));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function sortId(arr) {
    // let res;
    return arr;
}
console.log(sortId(coursesAndDurationArray));

console.log('-------------Task9: Array functions-------------');
//   описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

console.log('-------------Task10: Array functions-------------');
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// console.log('-------------Task11: Array functions-------------');
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];