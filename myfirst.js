var fs = require('fs');
var file = process.argv[1];
var buf = fs.readFileSync(process.argv[2],'utf8');
var lines = buf.split('\n');
console.log(lines.length-1);
