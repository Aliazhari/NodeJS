/**
 * Author Ali Azhari
 * 
 * Exporint more than a single object or function
 * 
 * First approach
 */

var data = {
    firstName: 'John',
    lastName: 'Smith'
};

// var f1 = function (value) {
//     data.firstName = value;
// };
// var f2 = function () {
//     return data.firstName;
// };
// var f3 = function (value) {
//     data.lastName = value;
// };
// var f4 = function () {
//     return data.lastName;
// };

// module.exports = {
//     setFirstName: f1,
//     getFirstName: f2,
//     setLastName: f3,
//     getLastName: f4
// };


// ES6
var f1 = (value) => {
    data.firstName = value;
};
var f2 = () => {
    return data.firstName;
};
var f3 = (value) => {
    data.lastName = value;
};
var f4 = () => {
    return data.lastName;
};

module.exports = {
    setFirstName: f1,
    getFirstName: f2,
    setLastName: f3,
    getLastName: f4
};