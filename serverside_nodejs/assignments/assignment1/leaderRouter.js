const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((request, response, next) => {
        response.end('Will send all the Leaders Information to you!');
    })
    .post((request, response, next) => {
        response.end('Will add the Leader with name : ' + request.body.name + ' and with details: ' + request.body.description);
    })
    .put((request, response, next) => {
        response.statusCode = 403;
        response.end('PUT operation not supported on /leaders');
    })
    .delete((request, response, next) => {
        response.end('Deleting all Leaders');
    });

leaderRouter.route('/:leaderId')
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((request, response, next) => {
        response.end('Will Send details of the Leader : ' + request.params.leaderId + ' to you');
    })
    .post((request, response, next) => {
        response.statusCode = 403;
        response.end('POST Operation is not supported on /leaders/' + request.params.leaderId);
    })
    .put((request, response, next) => {
        response.write('Updating the Leader : ', request.params.leaderId + '\n');
        response.end('Will Update the Leader : ' + request.body.name +
            ' with details : ' + request.body.description);
    })
    .delete((request, response, next) => {
        response.end('Deleting Leader : ' + request.params.leaderId);
    });

module.exports = leaderRouter;
