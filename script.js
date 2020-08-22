//--- 1

const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
};

function addFullName(user) {
    user.fullName = user.firstName + ' ' + user.lastName; // Используй щаблонные строки ``
};

addFullName(user);

console.log(user);


//--- 2

const users = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
};

function restoreNames(users) {
    let name = users.fullName.split(' ');
    users.firstName = name[0];
};

restoreNames(users);

console.log(users);

//--- 3

const robot = {
    version: 16,
    name: 'Cleaner 3000',
    coords: [345, 12],
};

function getRobotSchema(robot) {
    const robot_copy = Object.entries(robot);
    const keys = robot_copy.map(([key, value]) => [key, typeof value]);
    return keys;
};

console.log(getRobotSchema(robot));
