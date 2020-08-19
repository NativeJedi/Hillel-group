//Task 1
const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
}

function addFullName(user) {
    const field = 'fullName';
    user[field] = user.firstName + ' ' + user.lastName; // лучше использовать шаблонные строки
}

addFullName(user);

//Task 2

const users = [
    {
        firstName: 'Ivan',
        lastName: 'Vasylchenko',
        fullName: 'Ivan Vasylchenko'
    },
    {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
    },
];

function restoreNames(user) {
    const [name] = user.fullName.split(' '); // деструктуризаци, гуд
    user.firstName = name;
}

users.forEach( (value => {
    if (!value.firstName) {
        restoreNames(value);
    }
}) );

//Task 3

const robot = {
    version: 16,
    name: 'Cleaner 3000',
    coords: [345, 12],
};

function getRobotSchema(object) {
    const typeArr = [];
    // У нас есть отличные методы массива для итерации
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            typeArr.push([key, typeof object[key]]);
        }
    }
    return typeArr;
}

const robotSchema = getRobotSchema(robot);
