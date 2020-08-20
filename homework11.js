"use strict"

// Task1

const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko'
};

function addFullName(madeUser) {
    madeUser.fullName = `${madeUser.firstName} ${madeUser.lastName}`;
}
addFullName(user);
console.log(user);