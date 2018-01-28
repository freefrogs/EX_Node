var os = require('os');
//var colors = require('colors');

function getTime() {
	var uptime = os.uptime();
	var h = uptime/3600;
	var hour = parseInt(h);
	var m = (uptime - hour * 3600) / 60;
	var minute = parseInt(m);
	var s = uptime - hour * 3600 - minute * 60;
	var second = s.toFixed(0);
	if (uptime >= 3600) {
		console.log('Uptime: '.magenta + hour + ' godz. ' + minute + ' min. ' + second + ' sek.');
	} else if (uptime >= 60 && uptime < 3600) {
		console.log('Uptime: '.magenta + minute + ' min. ' + second + ' sek.');
	} else {
		console.log('Uptime: '.magenta + second + ' sek.');
	}
}

exports.count = getTime;