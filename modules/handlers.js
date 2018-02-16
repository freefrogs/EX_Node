var fs = require('fs');
var fse = require('fs-extra');
var formidable = require('formidable');

exports.upload = function (request, response) {
	console.log('I start handling the request upload.');
	var form = new formidable.IncomingForm();
	form.parse(request, function (error, fields, files) {
		fse.move(files.upload.path, 'test.png', {overwrite: true});
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('Recived image:<br>');
		response.write('<img src="/show" />');
		response.end();
	});
}

exports.welcome = function(request, response) {
	console.log('I start handling the request welcome.');
	fs.readFile('templates/start.html', function(err, html) {
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		response.write(html);
		response.end();
	});
}

exports.error = function(request, response) {
	console.log('I do not know what to do.');
	response.write('404 error :(');
	response.end();
}

exports.show = function(request,response) {
	fs.readFile('test.png', 'binary', function(error,file) {
		response.writeHead(200, {'Content-Type': 'image/png'});
		response.write(file, 'binary');
		response.end();
	});
}