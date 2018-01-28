var os = require('os');
var colors = require('colors');
var Time = require('./Time');

function getOSinfo() {
	var type = os.type();

	if (type === 'Darwin') {
					type = 'OSX';
	} else if (type === 'Windows_NT') {
					type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();

	console.log('System:'.rainbow, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.green, cpu);
	Time.count();
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.cyan, userInfo.homedir);	
}

exports.print = getOSinfo;