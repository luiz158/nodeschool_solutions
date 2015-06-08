var fs = require('fs');
var lineNum = undefined;
function countLines(callback) {
	fs.readFile(process.argv[2], 'utf8', function done(err, data) {
		lineNum = data.split('\n');
		lineNum = lineNum.length - 1;
		callback();
	})
}
function readNum() {
	console.log(lineNum);
}

countLines(readNum);