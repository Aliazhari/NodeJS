/** Author: Ali Azhari 
 * 
 * Core Modules - Path module
 * 
 */

var path = require('path');

var input = __filename;
var dirname = __dirname;

console.log(input);
console.log(dirname);

console.log(path.dirname(input));

console.log(path.basename(input));

console.log(path.extname(input));
