
var obj = "obj = {name: 'Shifa!', email: 'shifa@gmail.com'};";
const al = "alert('Hello');";
var arr = "arr = [obj = {name: 'Shifa', email: 'shifa@gmail.com'} , alert('Hello') , 'Hello World'];";
var fs = require('fs');
fs.readFile('index.html', 'utf8', function (err, data) {
    //console.log(data);
    fs.writeFile('index2.html', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('index2.html', 'Hello World!', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
});

fs.writeFile('new-file.js' , al,  function(err){
    if (err) throw err;
    console.log('Saved!');
});

fs.open('new-file2.js', 'w', function (err , file) {
    if (err) throw err;
    fs.appendFile('new-file2.js', arr, function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
    fs.rename('new-file2.js', 'new-file-2.js', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
    console.log('Saved!');
});
fs.unlink('index2.html', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});