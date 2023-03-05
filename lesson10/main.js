console.log('-------------Task1: events-------------');
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms.f1;
const body = document.querySelector('body');

form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.createElement('div');
    const surName = document.createElement('div');
    const age = document.createElement('div');

    name.innerText = `Ім'я: ${this.name.value}`;
    surName.innerText = `Фамілія: ${this.surname.value}`;
    age.innerText = `Вік: ${this.age.value}`;
    body.append(name ,surName, age);
}

console.log('-------------Task2: events-------------');
// Є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const numberBlock = document.getElementById("number-block");
let number = parseInt(numberBlock.textContent);
let newNumber;
let localNumber = JSON.parse(localStorage.getItem('number'));
if (!localNumber) {
    localStorage.setItem('number', JSON.stringify(number));
}else {
    newNumber = parseInt(localStorage.getItem('number')) + 1;
    numberBlock.innerText = newNumber;
    localStorage.setItem('number', JSON.stringify(newNumber));
}

console.log('-------------Task3: events-------------');
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сесію

console.log('-------------Task4: events-------------');
// Зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єкті

console.log('-------------Task5: events-------------');
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)