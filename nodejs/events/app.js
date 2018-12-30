var fs = require('fs');
var events = require('events');
var url = require('url');
var eventEmitter = new events.EventEmitter();
var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);
var myEventHandler = function () {
  console.log('I hear a scream!');
};

var myNewEvent = function () {
  console.log('Hello');
};
var mySecEvent = function () {
  console.log('Hello World!');
};
var createFile = function () {
  fs.writeFile('events/fs-file.js' , 'alert("Hello World");' , function(err){
    if (err) throw err;
  });
  console.log('File Saved!');
};
var appendFile = function () {
  fs.appendFile('events/index.html' , 'Hello', function(err){
    if (err) throw err;
  });
  console.log('Updated!');
};
var unlink = function () {
  fs.unlink('events/fs-file.js' , function(err){
    if (err) throw err;
  });
  console.log('File deleted!');
};


eventEmitter.on('scream', myEventHandler);
eventEmitter.on('scream', myNewEvent);
eventEmitter.on('scream', mySecEvent);

eventEmitter.on('other', createFile);
eventEmitter.on('other', appendFile);
eventEmitter.on('other', unlink);

eventEmitter.emit('scream');
eventEmitter.emit('other');




