// We are importing the core HTTP Module directly
const http = require('http');

// Read / Write File System
const fs = require('fs');

// To get the relative path of the files
const path = require('path');

const hostname = 'localhost';
const port = 3000;

// Setting up the HTTP Server
const server = http.createServer((request, response) => {
    // request : The Request Object coming from the incoming HTTP Request
    console.log("request.headers =>", request.headers);

    // Getting the request details
    console.log('Request for ' + request.url + ' by method ' + request.method);

    if (request.method && request.method.toLowerCase() === 'get') {

        const fileURL = (request.url === '/') ? '/index.html' : request.url;
        const filePath = path.resolve('./public' + fileURL);
        const fileExtension = path.extname(filePath);

        // Checking whether the file is an HTML File
        if (fileExtension && fileExtension.toLowerCase() === '.html') {
            // (exists) : callback function
            fs.exists(filePath, (exists) => {
                // Callback Function
                if (!exists) {
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/html');
                    response.end('<html><body><h1>Error 404: ' + fileURL +
                        ' not found</h1></body></html>');
                    return;
                } else {
                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(response);
                }
            });
        }
        else {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.end('<html><body><h1>Error 404: ' + fileURL +
                ' not a HTML file</h1></body></html>');
        }
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.end('<html><body><h1>Error 404: ' + request.method +
            ' not supported</h1></body></html>');
    }

    // Commenting the below lines because : Cannot set headers after they are sent to the client
    // response.statusCode = 200; // status code : OK
    // response.setHeader('Content-Type', 'text/html'); // Setting the response body content type as html
    // response.end('<html><body><h1> WELCOME TO HTTP SESSION </h1></body></html>'); // Ends the HTTP server connection
});

// Start the HTTP Server
server.listen(port, hostname, () => {
    console.log(`Server Running at http:://${hostname}:${port}`);
});
