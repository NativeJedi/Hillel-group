function addFullName(user){
    let fName = user.firstName ? user.firstName : '';
	let lName = user.lastName ? user.lastName : '';
	user.fullName = [fName, lName].join(' ').trim();
}


const user = { firstName: 'Bob', lastName: 'Smith' };
addFullName(user);
console.log(user);