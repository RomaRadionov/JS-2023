console.log('-------------Task1: dom-------------');
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.background = 'grey';
// block.style.color = 'red';
// block.style.fontSize = '25px';
// document.body.append(block);

console.log('-------------Task2: dom-------------');
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// const nav = ['Main','Products','About us','Contacts'];
// const ul = document.createElement('ul');
// for (const item of nav) {
//     const li = document.createElement('li');
//     li.innerText = item;
//     ul.append(li);
// }
// document.body.append(ul);

console.log('-------------Task3: dom-------------');
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     const block = document.createElement('div');
//     block.innerText = `${item.title}: monthDuration - ${item.monthDuration}`;
//     document.body.append(block);
// }

console.log('-------------Task4: dom-------------');
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//
//     div.append(h1, p);
//     div.classList.add('item');
//     h1.classList.add('heading');
//     p.classList.add('description');
//     h1.innerText = item.title;
//     p.innerText = item.monthDuration;
//     document.body.append(div);
// }

console.log('-------------Task5: dom-------------');
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (const simpson of simpsons) {
//     const block = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const img = document.createElement('img');
//
//     block.append(h2, p, img);
//     block.classList.add('member');
//     h2.innerText = `${simpson.name} ${simpson.surname}: age - ${simpson.age}`;
//     p.innerText = simpson.info;
//     img.setAttribute('src', simpson.photo);
//     document.body.append(block);
// }


console.log('-------------Task6: dom-------------');
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
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

const wrap = document.createElement('div');
wrap.classList.add('wrap')
for (const item of coursesArray) {
    const block = document.createElement('div');
    const title = document.createElement('div');
    const duration = document.createElement('div');
    const monthDuration = document.createElement('div');
    const hourDuration = document.createElement('div');
    const modules = document.createElement('ul');

    title.innerText = item.title;
    monthDuration.innerText = `Month: ${item.monthDuration}`;
    hourDuration.innerText = `Hour: ${item.hourDuration}`;
    duration.append(monthDuration, hourDuration);

    title.classList.add('all', 'title');
    monthDuration.classList.add('all', 'duration');
    hourDuration.classList.add('all', 'duration');
    block.classList.add('item');
    duration.classList.add('flex')

    for (let i = 0; i < item.modules.length; i++) {
        const li = document.createElement('li');
        li.innerText = item.modules[i];
        li.classList.add('all', 'module');
        modules.append(li);
        if (i % 2 === 0) {
            li.classList.add('second')
        }
    }

    block.append(title, duration, modules)

    wrap.append(block)
    document.body.append(wrap);
}

console.log('-------------Task7: dom-------------');
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const elemId = document.createElement('div');
// const btn = document.createElement('button');
// document.body.append(btn, elemId);
// elemId.id = 'text';
// elemId.innerText = 'hiddenElem'
// btn.innerText = 'btn';
// function hide() {
//     elemId.classList.toggle('hidden');
// }
//
// btn.addEventListener("click", hide);


console.log('-------------Task8: dom-------------');
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
// та повідомити про це користувача
// const input = document.createElement('input');
// const btn = document.createElement('button');
// btn.innerText = 'btn';
//
// document.body.append(input, btn);
//
// function check() {
//     if (input.value < 18) {
//         input.value = '';  /*після додавання наш інпут очищається*/
//         return alert('Вам менше 18 років!!!')
//     }else {
//         input.value = '';  /*після додавання наш інпут очищається*/
//         return alert('Вам 18!!!')
//     }
// }
//
// btn.addEventListener('click', check);

console.log('-------------Task9: dom-------------');
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)