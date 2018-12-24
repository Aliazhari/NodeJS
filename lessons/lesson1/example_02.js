/**
 * Author Ali Azhari
 *
 * 
 * When a module is loaded by the require function, 
 * the module definition is cached and subsequent require calls 
 * within the application return the cached module definition. 
 * This allows the state to be shared between modules. 
 * The following example shows a JavaScript object being 
 * imported.
 */


var foo1 = require('./foo_02');

console.log(foo1.firstName, foo1.lastName);

foo1.lastName = 'Doe';
console.log(foo1.firstName, foo1.lastName);

var foo2 = require('./foo_02');
console.log(foo2.firstName, foo2.lastName);