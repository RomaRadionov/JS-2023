// 1 отримати масив об'єктів з endpoint'a https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
            let ul = document.getElementsByTagName('ul')[0];
            for (const item of value) {
                let li = document.createElement('li');
                let userBlock = document.createElement('div');
                let button = document.createElement('a');
                let par = document.createElement('p');
                userBlock.classList.add('userBlock')
                button.classList.add('btn')
                button.innerText = 'More...'
                // button.href.add('user-details.html')
                ul.append(li)
                li.append(userBlock)
                par.innerText = item.id + ') ' + item.name;
                userBlock.append(par)
                userBlock.append(button)
                // console.log(Object.keys(item));
                console.log(item);
            }

        }
    )
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання,
//   при кліку на яку відбувається перехід на сторінку user-details.html,
//   котра має детальну інформацію про об'єкт на який клікнули