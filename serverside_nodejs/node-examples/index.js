// Internal Object creation and executing the function
// var rect = {
//     perimeter: (x, y) => (2 * (x + y)),
//     area: (x, y) => (x * y)
// };

// Invoking the function present in external file
var rect = require('./rectangle');

function solveRectangle(l, b) {
    console.log("<-- Solving for rectangle with l =" + l + " and b =" + b + "-->");
    // if (l <= 0 || b <= 0) {
    //     console.log("<-- Rectangle dimensions should be greater than zero l =" + l + " and b =" + b + "-->");
    // } else {
    //     console.log("The area of the rectangle is " + rect.area(l, b));
    //     console.log("The Perimeter of the rectangle is " + rect.perimeter(l, b));
    // }
    // console.log("\n");

    // Using Callbacks
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, -5);