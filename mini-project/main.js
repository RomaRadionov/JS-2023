// 1 отримати масив об'єктів з endpoint'a https://jsonplaceholder.typicode.com/users
// let userInfo = {};
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
<!--                    <a href="user-details.html" onclick="getUserDetails(${item.id})" id="${item.id}" class="btn" target="_blank">More...</a>-->
                    <button class="btn" onclick="getUserDetails(${item.id})" id="${item.id}">More...</button>
                `;
                console.log(Object.keys(item));
                // console.log(item);
            }
            for (const item of value){
                let userInfo;
                // userInfo.push(item);
                console.log(item);
            }
        }
    )

// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання,
//   при кліку на яку відбувається перехід на сторінку user-details.html,
//   котра має детальну інформацію про об'єкт на який клікнули
let modal = document.getElementById('modal-active');
function getUserDetails (id) {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
        .then(value => {
            for ( const item of value){
                console.log(item)
                if (id == item.id){
                    modal.innerHTML = `
                    <div class="modal">
                        <div class="modal-main" onclick="closeModalDeleteWindow()">
                            <button class="modal-main-close" id="delete" onclick="closeModalDeleteWindow()">&times;</button>
                            <div class="modal-item">
                                <p class="modal-main-title">${item.id}) ${item.name}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-regular fa-id-card"></i>
                                <p>nickname: ${item.username}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-solid fa-envelope"></i>
                                <p>email: ${item.email}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-solid fa-earth-americas"></i>
                                <p>address: ${item.address.city}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-solid fa-phone-flip"></i>
                                <p>phone: ${item.phone}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-regular fa-id-card"></i>
                                <p>site: ${item.website}</p>
                            </div>
                            <div class="modal-item">
                                <i class="fa-regular fa-id-card"></i>
                                <p>company: ${item.company.name}</p>
                            </div>
                        </div>
                    </div>
                    `;
                    console.log(id);
                }
            }
        })
}

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постів используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформацію про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилізація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)