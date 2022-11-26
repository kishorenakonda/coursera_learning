const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

// Routes
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json()); // Parse the request body of the JSON Message

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// Tells the express to serve the static file from the folder present in our module
app.use(express.static(__dirname + '/public'));

// next is invoked to use additonal functionality / to invoke additional middleware
app.use((request, response, next) => {
    // console.log("request.headers", request.headers);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<html><body><h1> This is an Express Server </h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
