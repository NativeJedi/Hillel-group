const users = [
    { lastName: 'Smith', fullName: 'Bob Smith' },
	{ lastName: 'Tkachenko', fullName: 'Alex  Tkachenko'}];
restoreNames(users);
console.log(users);

function restoreNames(users){
    users.forEach(function(user){
		if(user.firstName) return;
		if(!user.fullName) return;
		
		user.firstName = user.fullName.split(' ')[0];
	});
}