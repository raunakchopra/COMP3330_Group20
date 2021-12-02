const express = require('express');

const router = express.Router();

module.exports = (hikeController, auth) => {

    router.get('/', hikeController.findAll.bind(hikeController));
    router.get('/:id', hikeController.findOne.bind(hikeController));

    router.post('/', hikeController.createOne.bind(hikeController));
    router.post('/many', hikeController.createMany.bind(hikeController));
    router.post('/:id/comment', hikeController.addComment.bind(hikeController));
    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
