'use strict';


//mission 1

// const user = { firstName: 'Ivan', lastName: 'Vasylchenko'};

// function addFullName () {
//    return `${user.firstName} ${user.lastName} ${user.fullName = user.firstName + ' ' + user.lastName}`;
// };

// addFullName(user);

// console.log(user);



// mission 2

const users = { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy'};

function restoreNames(users) {
  const name = users.fullName.split(' ');
  users.firstName = name[0];
};

restoreNames(users);

console.log(users);
