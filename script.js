"use strict";
//Задание 1
const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
}

function adFullName(user) {
    user.fullname = user.firstName + ' ' + user.lastName;
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
        const restoredName = users.fullName.replace(users.lastName,'');
        users.firstName = restoredName;
    });
}

restoreNames(users);
console.log(users);
