/** Author: Ali Azhari 
 * 
 * The asynchronous version of reading the file using 
 * the readFile function is shown below. 
 * The callback function is specified as the last 
 * argument of this function. When the read is complete, 
 * or if there is an error, the callback is called with 
 * the corresponding arguments. On successful read, the 
 * second argument of the callback function contains the 
 * contents read from the file.
 * */


const fs = require('fs');

// read from file
fs.readFile('ex_07.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());

});

/**
 * The asynchronous version of writing to the file using 
 * the writeFile function is shown below. 
 * The callback function is specified as the last 
 * argument of this function. When the write is complete, 
 * or if there is an error, the callback is called as shown below.
 *  */

 // write
 fs.writeFile('ex_08.txt', 'Welcome user to ex 08',
 function(err) {
     if (err) throw err;
     console.log('Write success');

 });
