const robot = {
	version: 16,
	name: 'Cleaner 3000',
	coords: [354, 12]
};

let schema = getRobotSchema(robot);
console.log(schema);

function getRobotSchema(robot){
	var result = [];
	for(var field in robot){
		result.push([field, typeof robot[field] ]);
	}
	return result;
}