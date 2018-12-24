/**
 * Author Ali Azhari
 *
 * importing an object through an object factory
 */


var foo1 = require('./foo_03')();

console.log(foo1.firstName, foo1.lastName);

foo1.lastName = 'Doe';
console.log(foo1.firstName, foo1.lastName);

var foo2 = require('./foo_03')();
console.log(foo2.firstName, foo2.lastName);