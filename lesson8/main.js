console.log('-------------Task1: Constructors_class-------------');
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this["surname"] = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
// users взяв з завдання mini-project
users.push(new User(1, "Leanne", "Graham", "Sincere@april.biz", "1-770-736-8031"));
users.push(new User(2, "Ervin", "Howell", "Shanna@melissa.tv", "010-692-6593"));
users.push(new User(3, "Clementine", "Bauch", "Nathan@yesenia.net", "1-463-123-4447"));
users.push(new User(4, "Patricia", "Lebsack", "Lucio_Hettinger@annie.ca", "254-954-1289"));
users.push(new User(5, "Chelsey", "Dietrich", "charlie.brown@example.com", "555-7890"));
users.push(new User(6, "Dennis", "Schulist", "Karley_Dach@jasper.info", "1-477-935-8478"));
users.push(new User(7, "Kurtis", "Weissnat", "Telly.Hoeger@billy.biz", "210-067-6132"));
users.push(new User(8, "Nicholas", "Runolfsdottir", "Sherwood@rosamond.me", "586-493-6943"));
users.push(new User(9, "Glenna", "Reichert", "Chaim_McDermott@dana.io", "775-976-6794"));
users.push(new User(10, "Clementina", "DuBuque", "Rey.Padberg@karina.biz", "024-648-3804"));

console.log(users);

console.log('-------------Task2: Constructors_class-------------');
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// filter() створює новий масив
let filterIdUsers = users.filter((user) => {
    if (user.id % 2 === 0) {
        return user
    }
});
console.log(filterIdUsers);

console.log('-------------Task3: Constructors_class-------------');
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortIdUsers = users.sort((a, b) => a.id - b.id);

console.log(sortIdUsers);

console.log('-------------Task4: Constructors_class-------------');
// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, "Leanne", "Graham", "Sincere@april.biz", "1-770-736-8031", ['product 1', 'product 2', 'product 3', 'product 4']),
    new Client(2, "Ervin", "Howell", "Shanna@melissa.tv", "010-692-6593", ['product 1', 'product 2']),
    new Client(3, "Clementine", "Bauch", "Nathan@yesenia.net", "1-463-123-4447", ['product 1']),
    new Client(4, "Patricia", "Lebsack", "Lucio_Hettinger@annie.ca", "254-954-1289", ['product 1', 'product 2']),
    new Client(5, "Chelsey", "Dietrich", "charlie.brown@example.com", "555-7890", ['product 1', 'product 2']),
    new Client(6, "Dennis", "Schulist", "Karley_Dach@jasper.info", "1-477-935-8478", ['product 1', 'product 2', 'product 3', 'product 4', 'product 5']),
    new Client(7, "Kurtis", "Weissnat", "Telly.Hoeger@billy.biz", "210-067-6132", ['product 1', 'product 2', 'product 3']),
    new Client(8, "Nicholas", "Runolfsdottir", "Sherwood@rosamond.me", "586-493-6943", ['product 1', 'product 2']),
    new Client(9, "Glenna", "Reichert", "Chaim_McDermott@dana.io", "775-976-6794", ['product 1', 'product 2', 'product 3']),
    new Client(10, "Clementina", "DuBuque", "Rey.Padberg@karina.biz", "024-648-3804", ['product 1', 'product 2']),
];

console.log(clients);

console.log('-------------Task5: Constructors_class-------------');
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
clients.sort((a, b) => {
    return a.order.length - b.order.length
});
console.log(clients);

console.log('-------------Task6: Constructors_class-------------');
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
        if (this.driver !== null) {
            console.log(`Водій: ${this.driver.name}, вік: ${this.driver.age}`);
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year += newValue;
    };

    this.addDriver = function (driver) {
        this.driver = {
            name: driver.name,
            age: driver.age,
        };
    }
}

const car1 = new Car('Peugeot', '407sw', 2006, 205, 2.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(25);
car1.changeYear(2009);
const driver = { name: 'Leanne Graham', age: 34};
car1.addDriver(driver)
console.log(car1.maxSpeed);
console.log(car1.driver);
car1.info();

console.log('-------------Task7: Constructors_class-------------');
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass{
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
        if (this.driver !== null) {
            console.log(`Водій: ${this.driver.name}, вік: ${this.driver.age}`);
        }
    };

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear (newValue) {
        this.year += newValue;
    };

    addDriver (driver) {
        this.driver = {
            name: driver.name,
            age: driver.age,
        };
    }
}
const car2 = new CarClass('Peugeot', '407sw', 2006, 205, 2.0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(25);
car2.changeYear(2009);
const driver1 = { name: 'Leanne Graham', age: 34};
car2.addDriver(driver1)
console.log(car2.maxSpeed);
console.log(car2.driver);
car2.info();

console.log('-------------Task8: Constructors_class-------------');
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let popelushki;
popelushki = [
    new Cinderella('Ivanka', 18, 37),
    new Cinderella('Oksana', 20, 38),
    new Cinderella('Olha', 19, 36),
    new Cinderella('Mariya', 21, 39),
    new Cinderella('Yulia', 22, 40),
    new Cinderella('Nataliya', 23, 35),
    new Cinderella('Olena', 24, 36),
    new Cinderella('Iryna', 25, 37),
    new Cinderella('Kateryna', 26, 38),
    new Cinderella('Anastasiia', 27, 39),
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

const prince = new Prince('Vasya', 25, 38);

// for найде всіх Попелюшок які підходять принцу, або break поставити в if після першого виведення в консоль
for (let i = 0; i < popelushki.length; i++) {
    if (popelushki[i].footSize === prince.foundShoeSize) {
        console.log(`${popelushki[i].name} повинна бути з принцом ${prince.name}`)
    }
}

// Метод find() вертає перший збіг, він не змінює масив
console.log(popelushki.find((popFoot) => popFoot.footSize === prince.foundShoeSize));