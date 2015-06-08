var net = require('net');

function zeroFill(i) {
	return (i < 10 ? '0' : '') + i
}
var now = function() {

	var date = new Date();
	return date.getFullYear() + '-'
	+ zeroFill(date.getMonth() + 1) + '-'
	+ zeroFill(date.getDay()) + ' '
	+ zeroFill(date.getHours()) + ':'
	+ zeroFill(date.getMinutes())
}

var server = net.createServer(function(socket) {
	socket.end(now() + '\n');
})

server.listen(Number(process.argv[2]));