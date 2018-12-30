const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([114]);
console.log(decoder.write(euro));
const encoder = new util.TextEncoder();
a = encoder.encode('this');
console.log(a);
// or with async function
async function timerExample() {
    //console.log('Before I/O callbacks');
    //console.log('After I/O callbacks');
    await setImmediatePromise();
}

setImmediatePromise('adasdad').then((value) => {
    //console.log('adasd' , value);
});

timerExample();
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(5000, 'foobar').then((value) => {
    console.log(value);
    // value === 'foobar' (passing values is optional)
    // This is executed after about 40 milliseconds.
});