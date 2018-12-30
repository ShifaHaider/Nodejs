var fs = require('fs');
fs.readFile('index.html', 'utf8', function (err, data) {
    console.log(data);
    fs.writeFile('index2.html', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('index2.html', 'Hello World', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });

});
fs.readFile('app.js', 'utf8', function (err, data) {
    console.log(data);
    fs.writeFile('app2.js', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.rename('app2.js', 'java-script.js', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
});
