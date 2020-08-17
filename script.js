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
