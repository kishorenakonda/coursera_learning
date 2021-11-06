// Object that contains all the function
var rectangleWithLocalObject = {
    perimeter: (l, b) => (2 * (l + b)),
    area: (l, b) => (l * b)
};

var rectangleWithRequire = require('./rectangle');

// Function to solve rectange problem - Using Local Object
function findRectangleWithLocalObject(length, breadth) {
    console.log("==== Solving the rectangle using local varaible object ====");
    console.log("Solving for rectangle with length = " + length + " and b = " + breadth);

    // In Javascript it is not considering negative value as false, so commenting the below conditions

    // Checking Negative condition for Length
    // if (!length) {
    //     console.log("Rectangle Length should be greater than zero , length = " + length);
    // }

    // Checking Negative condition for Breadth
    // if (!breadth) {
    //     console.log("Rectangle Breadth should be greater than zero , breadth = " + breadth);
    // }

    if (length <= 0 || breadth <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  length = " + length +
            ",  and breadth = " + breadth);
    } else {
        // Checking Postiive condition for Length and Breadth
        console.log("The area of the rectangle is " + rectangleWithLocalObject.area(length, breadth));
        console.log("The perimeter of the rectangle is " + rectangleWithLocalObject.perimeter(length, breadth));
    }
    console.log("===============");
}

// Function to solve rectange problem - Using Require Module
function findRectangleWithRequire(length, breadth) {
    console.log("==== Solving the rectangle using Require Module ====");
    console.log("Solving for rectangle with length = " + length + " and b = " + breadth);

    if (length <= 0 || breadth <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  length = " + length +
            ",  and breadth = " + breadth);
    } else {
        // Checking Postiive condition for Length and Breadth
        console.log("The area of the rectangle is " + rectangleWithRequire.area(length, breadth));
        console.log("The perimeter of the rectangle is " + rectangleWithRequire.perimeter(length, breadth));
    }
    console.log("===============");
}

// Function to solve rectangle problem - Using callback and Error Handling
function findRectangleUsingCallBacksandErrorHandling(length, breadth) {
    console.log("==== Solving the rectangle using callback and Error Handling ====");
    console.log("Solving for rectangle with length = " + length + " and breadth = " + breadth);
    rectangleWithRequire(length, breadth, (rectangleCallBackFn, errorFn) => {
        if (errorFn) {
            // As the error Message which was constructed in rectangle file.
            // It will be stored inside the error object inside message parameter
            console.log("ERROR: ", errorFn.message);
        }
        else {
            console.log("== After setTimeout Delay | Starts ==");
            console.log("The area of the rectangle of dimensions length = " + length +
                " and breadth = " + breadth + " is " + rectangleCallBackFn.area());
            console.log("The perimeter of the rectangle of dimensions length = " + length +
                " and breadth = " + breadth + " is " + rectangleCallBackFn.perimeter());
            console.log("== After setTimeout Delay | Ends ==");
        }
    });
    console.log("This statement after the call to findRectangleUsingCallBacksandErrorHandling()");
    console.log("===============");
}

// Invoking the rectangle function

// Postive Use Cases
findRectangleWithLocalObject(2, 4);
findRectangleWithLocalObject(3, 5);

// Once CallBack Function is being invoked we cannot use the require function
// As the callback function does not pass any parameter as arguments
// findRectangleWithRequire(2, 4);
// findRectangleWithRequire(3, 5);

findRectangleUsingCallBacksandErrorHandling(2, 4);
findRectangleUsingCallBacksandErrorHandling(3, 5);

// Negative Use Cases
findRectangleWithLocalObject(0, 5);
findRectangleWithLocalObject(-3, 5);

// Once CallBack Function is being invoked we cannot use the require function
// As the callback function does not pass any parameter as arguments
// findRectangleWithRequire(0, 5);
// findRectangleWithRequire(-3, 5);

findRectangleUsingCallBacksandErrorHandling(0, 5);
findRectangleUsingCallBacksandErrorHandling(-3, 5);
