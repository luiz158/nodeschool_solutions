var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
str = buf.toString();
str = str.split("\n");
console.log(str.length - 1);