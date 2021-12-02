const express = require('express');

const router = express.Router();

module.exports = (eventController, auth) => {

    router.post('/', eventController.createOne.bind(eventController));
    router.post('/many', eventController.createMany.bind(eventController));
    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
