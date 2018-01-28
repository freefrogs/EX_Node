var fs = require('fs');

fs.readdir('./', function(err, files) {
	fs.writeFile('./list.txt', files, function(err) {
		if (err) throw err;
		console.log('Data has been saved!');
		fs.readFile('./list.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
});
