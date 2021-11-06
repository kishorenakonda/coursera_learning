// Exports will automatically exports the variable
// Each File is consider as a inidividual module file and can be exported or imported anywhere

// exports.perimeter = (length, breadth) => (2 * (length + breadth));
// exports.area = (length, breadth) => (length * breadth);

// callback(successFn, errorFn); // Syntax of Call Back Function

module.exports = (length, breadth, callback) => {
    if (length <= 0 || breadth <= 0) {
        setTimeout(
            (response) => {
                callback(
                    null, // Success Block (or) Success Function
                    new Error("Rectangle Dimensions should be greater than zero: Length = " + length,
                        " breadth = " + breadth)); // Error Block (or) Error Function
            }, 2000);
    } else {
        setTimeout(
            (response) => {
                callback(
                    { // Success Block
                        perimeter: () => (2 * (length + breadth)),
                        area: () => (length * breadth)
                    },
                    null); // Error Block
            }, 2000); // Delaying the function by 2 seconds
    }
};
