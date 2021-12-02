const express = require('express');

const router = express.Router();

module.exports = (eventController, auth) => {

    router.get('/', eventController.findAll.bind(eventController));
    router.get('/:id', eventController.findOne.bind(eventController));

    router.post('/', eventController.createOne.bind(eventController));
    router.post('/many', eventController.createMany.bind(eventController));
    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
