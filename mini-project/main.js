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
function getUserDetails (id) {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
        .then(value => {
            for ( const item of value){
                console.log(item)
                if (id == item.id){
                    let modal = document.getElementById('modal-active');
                    modal.innerHTML = `
                    <div class="modal-main active" id="modal__delete">
                        <div class="modal-main__content" onclick="closeModalDeleteWindow()">
                            <button class="modal-main__close" id="delete" onclick="closeModalDeleteWindow()">&times;</button>
                            <h3 class="modal-main__title">${item.id}) ${item.name}</h3>
                            <p>${item.name}</p>
                        </div>
                    </div>
                    `;
                    console.log(id);
                }
            }
        })
}