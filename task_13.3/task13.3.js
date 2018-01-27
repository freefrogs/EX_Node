process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/node':
				process.stdout.write('Your node version is: ' + process.version + '\n');
				break;

			case '/lang':
				var system = process.env.OS;
				if (system == 'Linux' || system == 'Darwin') {
					process.stdout.write('Your system language is: ' + process.env.LANG + '\n');
				} else {
					process.stdout.write('You do not have proper operating system to get this information\n');
				}
				break;

			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;

			default:
				process.stdout.write('Wrong instruction!\n');
		}
	}
});