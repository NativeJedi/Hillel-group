//Task 1
const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
}

function addFullName(user) {
    const field = 'fullName';
    user[field] = user.firstName + ' ' + user.lastName;
}

addFullName(user);

