/**
 * Author Ali Azhari
 * 
 * Using Factory object
 * 
 * In the previous example, the same object is returned 
 * for multiple require calls. However, 
 * if a new object is required for each require call, 
 * then the module can export a function rather than the object. 
 * Invoking the exported function would then return a new object. 
 * The following example exports a single function that returns 
 * the JavaScript object, when invoked.
 */

module.exports = function () {
    return {
          firstName: 'John',
          lastName:  'Smith'
      };
  };