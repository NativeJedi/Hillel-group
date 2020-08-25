'use strict';


//mission 1

const user = { firstName: 'Ivan', lastName: 'Vasylchenko'};

function addFullName (user) {
   user.fullName = user.firstName + ' ' + user.lastName;
};

addFullName(user);

console.log(user);




// mission 2

// const users = { firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy'};

// function restoreNames(users) {
//   const name = users.fullName.split(' ');
//   users.firstName = name[0];
// };

// restoreNames(users);

// console.log(users);



// mission 3

// const robot = {
//     version: 16,
//     name: 'Cleaner 3000',
//     coords: [345, 12],
// };

// function getRobotSchema(robot) {
//     return Object.entries(robot).map(([key, value]) => [key, typeof value]);
// }

// const robotInfo = getRobotSchema(robot);
// console.log(robotInfo);