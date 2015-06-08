var fs = require('fs');
fs.readdir(process.argv[2], function callback(err, list) {
	list.forEach(function(lsItem) {
		var itemAttr = lsItem.split('.');
		if(itemAttr[1] === process.argv[3]) {
			console.log(lsItem);
		}
	})
})