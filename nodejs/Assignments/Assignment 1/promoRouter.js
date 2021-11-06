const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((request, response, next) => {
        response.end('Will send all the Promotions to you!');
    })
    .post((request, response, next) => {
        response.end('Will add the promotion: ' + request.body.name + ' with details: ' + request.body.description);
    })
    .put((request, response, next) => {
        response.statusCode = 403;
        response.end('PUT operation not supported on /promotions');
    })
    .delete((request, response, next) => {
        response.end('Deleting all promotions');
    });


promoRouter.route('/:promoId')
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((request, response, next) => {
        response.end('Will Send details of the Promotion : ' + request.params.promoId + ' to you');
    })
    .post((request, response, next) => {
        response.statusCode = 403;
        response.end('POST Operation is not supported on /prmotions/' + request.params.promoId);
    })
    .put((request, response, next) => {
        response.write('Updating the Promotion : ', request.params.promoId + '\n');
        response.end('Will Update the Promotion : ' + request.body.name +
            ' with details : ' + request.body.description);
    })
    .delete((request, response, next) => {
        response.end('Deleting Promotion : ' + request.params.promoId);
    });

module.exports = promoRouter;
