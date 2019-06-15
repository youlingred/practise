var parser = require('minimist')
var argv = parser(process.argv.slice(2));
console.dir(argv);
console.log('------------------------------------');
var argv1=parser(['-x','3', '-y', '4', '-n5', '-abc','--beep=boop', 'foo', 'bar', 'baz'])

console.dir(argv1)
