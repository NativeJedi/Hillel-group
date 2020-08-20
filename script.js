'use strict';


const user = { firstName: 'Ivan', lastName: 'Vasylchenko'};

function addFullName () {
   return `${user.firstName} ${user.lastName} ${user.fullName = user.firstName + ' ' + user.lastName}`;
};

addFullName(user);

console.log(user);