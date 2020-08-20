"use strict"


// Task #1
const user = { firstName: 'Ivan', lastName: 'Vasylchenko' };

function addFullName(passedUser) {
    passedUser.fullName = `${passedUser.firstName} ${passedUser.lastName}`;
}

addFullName(user);
// user === { firstName: 'Ivan', lastName: 'Vasylchenko', fullName: 'Ivan Vasylchenko' }

console.log(user);




// Task #2
const users = [
    {
      firstName: undefined,
      lastName: 'Drogo',
      fullName: 'Ivan Drogo',
    },
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: undefined,
      lastName: 'Doe',
      fullName: 'Doe Sam',
    },
    {
      firstName: "Ken",
      lastName: 'M',
      fullName: 'Ken M',
    },
];

function restoreNames(passedUsers) {
    passedUsers.forEach(el => {
        if (el.firstName === undefined) {
            const tempFirstName = el.fullName.replace(el.lastName, "").trim(); // Лучше разбить на массив по пробелу
            // и из массива достать имя. Реплейс используется немного не для таких кейсов
            el.firstName = tempFirstName;
        }
    });
}

restoreNames(users);
// users === [..., {firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy'}, ...]

console.log(users);




// Task #3
const robot = {
    version: 16,
    name: 'Cleaner 3000',
    coords: [345, 12],
    myprop: null,
};

function getRobotSchema(passedRobot) {
    const robotEntries = Object.entries(passedRobot);

    if (robotEntries.length === 0) {
        return "Empty object!"
    }

    const robotSchema = robotEntries.map(el => {
        return el[1] === null ? [el[0], "null"] : [el[0], typeof el[1]]; // Отдельная проверка на null, поскольку его тип определяется как object
    });

    return robotSchema;
}

// getRobotSchema(robot) === [['version', 'number'], ['name', 'string'], ['coords', 'object']]

console.log(getRobotSchema(robot));
