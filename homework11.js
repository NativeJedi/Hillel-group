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


// Task2

const users = [{
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
    },
    {
        firstName: 'Chloe',
        lastName: 'Tilbery',
        fullName: 'Chloe Tilbery',
    },];

function restoreNames(user) {
    const [lossName] = user.fullName.split(' ');
    user.firstName = lossName;
}

users.forEach( (name => {
    if (!name.firstName) {
        restoreNames(name);
        console.log(users);
    }
}) );





