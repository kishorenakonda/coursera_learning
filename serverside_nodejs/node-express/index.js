const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = "3000";

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// Fetching the APIs from the external file / routes
const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

// const dishes = '/dishes';
// const dishApiUrl = dishes + '/:dishId';

// API Request
// app.all(dishApiUrl, (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });

// app.get(dishApiUrl, (req, res, next) => {
//     res.end('Will send details of the dish: ' + req.params.dishId + ' to you');
// });

// app.post(dishApiUrl, (req, res, next) => {
//     // res.statusCode = 403;
//     // res.end('POST Operation not supported on ' + dishes + '/' + req.params.dishId);
//     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put(dishApiUrl, (req, res, next) => {
//     // res.end('PUT Operation not supported on ' + dishes + '/' + req.params.dishId);
//     res.write('Updating the dish: ' + req.params.dishId);
//     res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.delete(dishApiUrl, (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });

// With this we can serve the static HTML files using express
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> This is an Express Server </h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});