/** Author: Ali Azhari 
 * 
 * The following example illustrates some of the global variables.
 * 
 */

console.log(__dirname);
console.log(__filename);

console.log(process.argv);

var counter = 0;
var foo = setInterval(() => {
    counter++;
    console.log(counter, 'seconds passed');
    if (counter == 5) {
        console.log('exiting');
        clearInterval(foo);
    }
}, 1000);


