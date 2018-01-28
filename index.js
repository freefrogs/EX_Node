var http = require('http');
var fs = require('fs');

var server = http.createServer();						// the same as: var server = http.createServer(function (request, response) {}),
server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.write('<h1>404: Wrong url</h1>');
		response.write('<img src="https://images.pexels.com/photos/208087/pexels-photo-208087.jpeg?h=350&auto=compress&cs=tinysrgb" alt="error">')
		response.end();
	}
});
server.listen(9000);