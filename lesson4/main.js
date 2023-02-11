console.log('-------------Task1: Functions-------------');
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return a * b;
}

console.log(areaRectangle(4, 5));

console.log('-------------Task2: Functions-------------');
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return 2 * Math.PI * r;
}

console.log(areaCircle(5));

console.log('-------------Task3: Functions-------------');
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaCylinder(h, r) {
    return 2 * Math.PI * r * h + 2 * Math.PI * r * r; /*Площа повної поверхні циліндра*/
    // return 2*Math.PI*r*h; /*Площа бічної поверхні циліндра*/
}

console.log(areaCylinder(2, 3));

console.log('-------------Task4: Functions-------------');
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 35, 'st',{name: 'Vasya', age: 43}, true];
function eachElemet(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
eachElemet(arr)

console.log('-------------Task5: Functions-------------');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(t) {
    document.write(`<p>${t}</p>`)
}
createP('lorem');

console.log('-------------Task6: Functions-------------');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlLi() {

}

console.log('-------------Task7: Functions-------------');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

console.log('-------------Task8: Functions-------------');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

console.log('-------------Task9: Functions-------------');
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.

console.log('-------------Task10: Functions-------------');
// - створити функцію яка повертає найменьше число з масиву
let arr1 = [3, 54, 35, 765, 834, 2];
function minNumber(n) {
    let min = n[0];
    for (const nElement of n) {
        if (nElement < min) {
            min = nElement
        }
    }
    return min;
}
console.log(minNumber(arr1))

console.log('-------------Task11: Functions-------------');
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArr(n) {
    let sum = 0;
    for (const nElement of n) {
        sum += nElement
    }
    return sum;
}
console.log(sumArr(arr1))

console.log('-------------Task12: Functions-------------');
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let value1 = arr[index2];
    let value2 = arr[index1];
    arr[index1] = value1;
    arr[index2] = value2;
    return arr;
}
console.log(swap(arr1,1,2));

console.log('-------------Task13: Functions-------------');
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result;
    if (exchangeCurrency === 'USD') {
        result = sumUAH / currencyValues[0].value;
    }else {
        result = sumUAH / currencyValues[1].value;
    }
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));