var fs = require('fs');
var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, list) {
	if(err) {
		console.log(err)
	} else {
		for(var i = 0; i < list.length; i += 1) {
			console.log(list[i]);
		}
	}
})