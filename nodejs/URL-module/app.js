var url = require('url');
var fs = require('fs');
var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q);
console.log(q.query.month);

fs.writeFile('URl-module/new-file.js' , q.query.month , function(err){
    if (err) throw err;
    console.log('Saved!');
});

fs.appendFile('index-2.html', "Hello World!", function (err) {
    if (err) throw err;
    console.log('Updated!');
});