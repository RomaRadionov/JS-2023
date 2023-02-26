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
                // console.log(Object.keys(item));
                // console.log(item);
            }
            // for (const item of value){
            //     let userInfo;
            //     // userInfo.push(item);
            //     console.log(item);
            // }
        }
    )

// 1 отримати масив об'єктів з endpoint'a https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання,
//   при кліку на яку відбувається перехід на сторінку user-details.html,
//   котра має детальну інформацію про об'єкт на який клікнули


// Пишемо функцію яка буде відкривати модальне вікно і виводити в нього всі дані про конкретного юзера
let modal = document.getElementById('modal-active');
function getUserDetails (id) {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
        .then(value => {
            for ( const item of value){
                // console.log(item)
                if (id === item.id){
                    modal.innerHTML = `
                    <div class="modal">
                        <div class="modal-main">
                            <button class="modal-main-close" id="delete" onclick="closeModalDeleteWindow()"><i class="fa-solid fa-chevron-left"></i></button>
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
                            <button class="btn" onclick="getUserPosts(${item.id})" id="${item.id}">post of current user</button>
                        </div>
                    </div>
                    `;
                    console.log(id);
                }
            }
        })
}


// Пишемо функцію яка буде закривати модальне вікно
const closeModalDeleteWindow = () => {
    modal.innerHTML = '';
    posts.innerHTML = ''
};


// Пишемо функцію яка буде відкривати модальне вікно з постами даного юзера
let posts = document.createElement('div');
function getUserPosts (id) {
    modal.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(value => {
            modal.append(posts);
            posts.classList.add('grid', 'post');
            posts.innerHTML =
                '<button class="modal-main-close" id="delete" onclick="closeModalDeleteWindow()"><i class="fa-solid fa-chevron-left"></i></button>';
            for (const postItem of value) {
                // console.log(postItem);
                posts.innerHTML += `
                    <div class="modal-main">                            
                            <div class="modal-item">
                                <i class="fa-regular fa-id-card"></i>
                                <p>Post: ${postItem.id}</p>
                                <p>Title: ${postItem.title}</p>                                
                            </div>
                            <button class="btn" onclick="getUserPostsInfo(${postItem.id})" id="${postItem.id}">More...</button>
                    </div>
                `;
            }
        })
}

function getUserPostsInfo(id) {
    posts.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(value => {
            posts.innerHTML = `
                <button class="modal-main-close" id="delete" onclick="closeModalDeleteWindow()"><i class="fa-solid fa-chevron-left"></i></button>`;
            for ( const post of value) {
                // console.log(post);
                posts.innerHTML += `
                    <div class="modal-coment">
                         <i class="fa-regular fa-id-card"></i>
                         <p>Post: ${post.id}</p>
                         <p>name: ${post.name}</p>                                
                         <p>email: ${post.email}</p>                                
                         <p>body: ${post.body}</p>                                
                    </div>
                `;
            }
        })
}

// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//   котра має детальну інфу про поточний пост.
//
// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижче інформацію про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилізація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижче, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і т.д.)