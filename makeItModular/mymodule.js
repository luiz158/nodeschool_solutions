var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if(err) {return callback(err)};
		var i = 0;
		var matches = [];
		for(var i = 0; i < list.length; i += 1) {
			var attr = list[i].split('.');
			if(attr[1] === ext) {
				matches.push(list[i]);
			}
		}
		callback(null, matches);
	})
}