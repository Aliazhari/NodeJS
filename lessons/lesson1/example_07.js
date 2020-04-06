/** Author: Ali Azhari 
 * 
 * The following example shows the synchronous versions of 
 * writing content to a file (writeFileSync) and reading 
 * content from the file (readFileSync). By default, 
 * the data read is returned as a Buffer object. 
 * The toString method converts the buffer to the corresponding
 * string. The optional encoding value can also be specified to read the content directly as a string.
 */


const fs = require('fs');

// write to file
fs.writeFileSync('ex_07.txt', 'Welcome user');

// read from file
var data1 = fs.readFileSync('ex_07.txt');
console.log(data1);
console.log(data1.toString());

var data2 = fs.readFileSync('ex_07.txt', 'utf8');
console.log(data2);