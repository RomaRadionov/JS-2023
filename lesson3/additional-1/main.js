console.log('-------------Task1-additional-1: Цикли-------------')
// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNumber = [62, 567, 436, 98, 55];
let arrString = ["st1", "st2", "st3", "st4", "st5"];
let arrAll = [true, 435, 'st1', false, 35, -2];
console.log(arrNumber);
console.log(arrString);
console.log(arrAll);

console.log('-------------Task2-additional-1: Цикли-------------')
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr2 = [];
arr2[0] = 56;
arr2[1] = 'st44';
arr2[2] = true;
arr2[3] = undefined;
arr2[4] = false;
arr2[5] = 'sfs345';
arr2[6] = {name: 'Martin', age: 76};
arr2[7] = [43, 'st67', true];
arr2[8] = 564465345;
console.log(arr2);
console.log('-------------Task3-additional-1: Цикли-------------')
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
console.log('1. перебрати його циклом while')
// 1. перебрати його циклом while
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr3.length) {
    console.log(arr3[i])
    i++
}
console.log('2. перебрати його циклом for')
// 2. перебрати його циклом for
for (let i = 0; i < arr3.length; i++) {
    console.log(`${[i]} - ${arr3[i]}`)
}
console.log('3. перебрати циклом while та вивести числа тільки з непарним індексом')
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let a = 1;
while (a < arr3.length) {
    console.log(`${[a]} - ${arr3[a]}`)
    a += 2;
}
console.log('4. перебрати циклом for та вивести числа тільки з непарним індексом')
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 1; i < arr3.length; i += 2) {
    console.log(`${[i]} - ${arr3[i]}`)
}
console.log('5. перебрати циклом while та вивести числа тільки парні значення')
// 5. перебрати циклом while та вивести числа тільки парні значення
let y = 0;
while (y < arr3.length) {
    console.log(`${[y]} - ${arr3[y]}`)
    y += 2;
}
console.log('6. перебрати циклом for та вивести числа тільки парні значення')
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = 0; i < arr3.length; i += 2) {
    console.log(`${[i]} - ${arr3[i]}`)
}
console.log('7. замінити кожне число кратне 3 на слово "okten"')
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] % 3 === 0){
//         arr3[i] = "okten";
//     }
//     console.log(arr3[i])
// }
console.log('8. вивести масив в зворотному порядку.')
// 8. вивести масив в зворотному порядку.
for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}

console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 1. перебрати його циклом while')
// 9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)
// 1. перебрати його циклом while (с заду на перед)
let n = arr3.length - 1;
while (n >= 0) {
    console.log(arr3[n])
    n--
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 2. перебрати його циклом for')
// 2. перебрати його циклом for (с заду на перед)
for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 3. перебрати циклом while та вивести числа тільки з непарним індексом')
// 3. перебрати циклом while та вивести числа тільки з непарним індексом (с заду на перед)
let t = arr3.length - 1;
while (t >= 0) {
    if (t % 2 != 0) {
        console.log(`${[t]} - ${arr3[t]}`)
    }
    t--;
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 4. перебрати циклом for та вивести числа тільки з непарним індексом')
// 4. перебрати циклом for та вивести числа тільки з непарним індексом (с заду на перед)
for (let i = arr3.length - 1; i >= 0; i--) {
    if (i % 2 != 0) {
        console.log(`${[i]} - ${arr3[i]}`)
    }
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 5. перебрати циклом while та вивести числа тільки парні значення')
// 5. перебрати циклом while та вивести числа тільки парні значення (с заду на перед)
let e = arr3.length - 1;
while (e >= 0) {
    if (e % 2 == 0) {
        console.log(`${[e]} - ${arr3[e]}`)
    }
    e--;
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 6. перебрати циклом for та вивести числа тільки парні значення')
// 6. перебрати циклом for та вивести числа тільки парні значення (с заду на перед)
for (let i = arr3.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(`${[i]} - ${arr3[i]}`);
    }
}
console.log('9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)' + ' 7. замінити кожне число кратне 3 на слово "okten"')
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = arr3.length - 1; i >= 0; i--) {
    if (arr3[i] % 3 === 0) {
        arr3[i] = "okten";
    }
    console.log(arr3[i])
}
console.log('-------------Task4-additional-1: Цикли-------------')
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = [2354, 657, 768, 467, 4747, 74, 87, 374, 34, 7];
for (let j = 0; j < arr4.length; j++) {
    console.log(arr4[j])
}
console.log('-------------Task5-additional-1: Цикли-------------')
// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arr5 = ['st0', 'st1', 'st2', 'st3', 'st4', 'st5', 'st6', 'st7', 'st8', 'st9'];
for (let j = 0; j < arr5.length; j++) {
    console.log(arr5[j])
}
console.log('-------------Task6-additional-1: Цикли-------------')
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr6 = ['st99', true, 34, 87, false, 'st55', 2222, {name: 'vasya', age: 44}, 'st34', 5646];
for (let j = 0; j < arr6.length; j++) {
    console.log(arr6[j])

}
console.log('-------------Task7-additional-1: Цикли-------------')
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr7 = [89, true, 'st', 9896234, false, 'st57', 2345, true, 'st45676', 435464];
for (let j = 0; j < arr7.length; j++) {
    if (typeof arr7[j] == 'boolean') {
        console.log(`${[j]} - ${arr7[j]}`)
    }
    // if (arr7[j] === true || arr7[j] === false) {
    //     console.log(`${[j]} - ${arr7[j]}`)
    // }
}
console.log('-------------Task8-additional-1: Цикли-------------')
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < arr7.length; j++) {
    if (typeof arr7[j] == 'number') {
        console.log(`${[j]} - ${arr7[j]}`)
    }
}
console.log('-------------Task9-additional-1: Цикли-------------')
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < arr7.length; j++) {
    if (typeof arr7[j] == 'string') {
        console.log(`${[j]} - ${arr7[j]}`)
    }
}
console.log('-------------Task10-additional-1: Цикли-------------')
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let  arr8 = [];
arr8[0] = true;
arr8[1] = {name: 'Vasya', age: 35};
arr8[2] = 353598;
arr8[3] = 3.2;
arr8[4] = false;
arr8[5] = [6, 4, 'd', 'st'];
arr8[6] = 'st765';
arr8[7] = 0;
arr8[8] = -1257;
arr8[9] = null;
for (const arr8Element of arr8) {
    console.log(arr8Element);
}
console.log('-------------Task11-additional-1: Цикли-------------')
// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//     document.write(`${i} `)
// }
console.log('-------------Task11-additional-1: Цикли-------------')
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`);
//     document.write(`${i} `)
// }
console.log('-------------Task12-additional-1: Цикли-------------')
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${i}`);
//     document.write(`${i} `)
// }
console.log('-------------Task13-additional-1: Цикли-------------')
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i}`);
//         document.write(`${i} `);
//     }
// }
console.log('-------------Task14-additional-1: Цикли-------------')
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 != 0) {
//         console.log(`${i}`);
//         document.write(`${i} `);
//     }
// }
console.log('-------------Task15-additional-1: Цикли-------------')
// створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title: 'Мистецтво війни', pageCount: 231, genre: ['philosophy'], authors: [{name: 'Сунь-цзи'}]},
    {
        title: 'Іди туди, де страшно. І отримаєш те, про що мрієш', pageCount: 234, genre: ['psychology'],
        authors: [{name: 'Дж. Ловлесс'}]
    },
    {
        title: 'Фактор Черчилля. Як одна людина змінила історію',
        pageCount: 412,
        genre: ['Biographies and memoirs', 'Memoirs'],
        authors: [{name: 'Боріс Джонсон'}]
    },
    {
        title: 'Працюючи навпаки. Інсайти та секрети від топ-менеджерів Amazon',
        pageCount: 416,
        genre: ['Бізнес-книги'],
        authors: [{name: 'Колін Брайар'},
            {name: 'Білл Карр'}]
    },
    {
        title: 'Анатомія Грея', pageCount: 832, genre: ['Книги про медицину і здоров\'я'],
        authors: [{name: 'Біліч Габріель Лазаревич'}]
    },
    {
        title: 'The Martian', pageCount: 416, genre: ['Художня література'],
        authors: [{name: 'Енді Вейр'}]
    },
    {
        title: 'Looking for Alaska', pageCount: 288, genre: ['Роман'],
        authors: [{name: 'Джон Грін'}]
    },
    {
        title: 'A Clash of Kings (A Song of Ice and Fire, Book 2)', pageCount: 864, genre: ['Фентезі'],
        authors: [{name: 'Джордж Р.Р. Мартін'}]
    },
    {
        title: 'Грушевський, Скоропадський, Петлюра', pageCount: 800, genre: ['Історія України'],
        authors: [{name: 'Данило Яневський'}]
    },
    {
        title: 'Як не померти передчасно. Їжа, яка відвертає та лікує хвороби',
        pageCount: 512,
        genre: ['Здорове харчування', 'Дієти'],
        authors: [{name: 'Майкл Грегер'},
            {name: 'Джен Стоун'}]
    },
    {
        title: 'Гаррі Поттер і філософський камінь. Книга 1', pageCount: 320, genre: ['Дитяче фентезі', 'Фантастика', 'Фентезі'],
        authors: [{name: 'Джоан К. Ролінґ'}]
    }
]
console.log('-------------знайти найбільшу книжку-------------')
// - знайти найбільшу книжку
let minPage = books[0].pageCount;
let maxPage = 0;
for (const book of books) {
    if (book.pageCount > maxPage) {
        maxPage = book.pageCount;
    }
    if (book.pageCount < minPage) {
        minPage = book.pageCount;
    } ;
}
for (const book of books) {
    if (book.pageCount == maxPage) {
        console.log('Найбільша книга ' + book.title + ' - ' + book.pageCount + ' сторінок')
    }
}
console.log(minPage + ' Найменша книга');
console.log(maxPage + ' Найбільша книга');
console.log('-------------знайти книжку/ки з найбільшою кількістю жанрів-------------')
// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenre = books[0].genre.length;
for (const book of books) {
    if (book.genre.length > maxGenre) {
        maxGenre = book.genre.length
    }
}
for (const book of books) {
    if (book.genre.length == maxGenre) {
        console.log(`Найбіль жанрів - ${book.title}`)
    }
}

console.log('-------------знайти книжку/ки з найдовшою назвою-------------')
// - знайти книжку/ки з найдовшою назвою
let maxLengthName = books[0].title.length;
for (const book of books) {
    if (book.title.length > maxLengthName){
        maxLengthName = book.title.length;
    }
}
console.log(maxLengthName);
for (const book of books) {
    if (book.title.length == maxLengthName) {
        console.log(`Найдовша назва ${book.title}`)
    }
}
console.log('-------------знайти книжку/ки які писали 2 автори-------------')
// - знайти книжку/ки які писали 2 автори
for (const book of books) {
    if (book.authors.length == 2) {
        console.log(book)
    }
}
console.log('-------------знайти книжку/ки які писав 1 автор-------------')
// - знайти книжку/ки які писав 1 автор
for (const book of books) {
    if (book.authors.length == 1) {
        console.log(book)
    }
}