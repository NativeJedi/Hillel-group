"use strict";
//Задание 1
const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
}

function adFullName(user) {
    user.fullname = `${user.firstName} ${user.lastName}`;
}

adFullName(user);
console.log(user);


//Задание 2
const users = [
    {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
    },
];

function restoreNames(users) {
    users.forEach((users) => {
        const restoredName = users.fullName.split(' ');
        users.firstName = restoredName[0];
    });
}

restoreNames(users);
console.log(users);

//Задание 3

const robot = {
    version: 16,
    name: 'Cleaner 3000',
    coords: [345, 12],
};

function getRobotSchema() {

    const keyAndValue = Object.entries(robot);
    const keyAndType = keyAndValue.map(([key, value]) => [key, typeof value]);
    return keyAndType;
}

console.log(getRobotSchema(robot));