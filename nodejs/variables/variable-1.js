const util = require('util');
const url = require('url');
const myURL = new url.URL('/hello', 'https://example.org/');
//console.log(myURL);
myURL.searchParams.append('abc', 'xyz');
//console.log(myURL.href);
myURL.searchParams.delete('abc');
//console.log(myURL.href);
myURL.searchParams.set('a', 'b');
//console.log(myURL.href);
//console.log(myURL.searchParams);

//const decoder = new util.TextDecoder('shift_jis');
//let string = '';
//let buffer;
//while (buffer = getNextChunkSomehow()) {
// string += decoder.decode(buffer, { stream: true });
//}
//string += decoder.decode();
//console.log(string);
const encoder = new util.TextEncoder();
 a = encoder.encode('this');
//console.log(b , a);

module.exports.hello = 'Hello World';
//console.log(module);

console.log(__dirname);
console.log(__filename);





