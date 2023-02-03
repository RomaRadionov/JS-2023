// 1 отримати масив об'єктів з endpoint'a https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
            let ul = document.getElementsByTagName('ul')[0];
            for (const item of value) {
                let li = document.createElement('li');
                let userBlock = document.createElement('div');
                userBlock.classList.add('userBlock')
                ul.append(li)
                li.append(userBlock)
                userBlock.innerHTML = `
                    <p>${item.id}) ${item.name}</p>
                    <a href="user-details.html" onclick="userDetails(item)" class="btn" target="_blank">More...</a>
                `;
                // console.log(Object.keys(item));
                console.log(item);
            }

        }
    )

// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання,
//   при кліку на яку відбувається перехід на сторінку user-details.html,
//   котра має детальну інформацію про об'єкт на який клікнули