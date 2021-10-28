const express = require('express');
const loginValidator = require('./../validators/access/login');

const router = express.Router();

module.exports = (accessController, auth) => {
    router.post('/login', loginValidator(), accessController.login.bind(accessController));

    return router;
};
