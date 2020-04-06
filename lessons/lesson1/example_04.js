/**
 * Author Ali Azhari
 *
 * importing more than a single object or function
 */

foo = require('./foo_04');

console.log(foo.getFirstName(), foo.getLastName());

foo.setLastName('Doe');

console.log(foo.getFirstName(), foo.getLastName());