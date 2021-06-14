/**
 * Author: Siraj
 * Create on Jun 13 2021
 * This file contains all the api routes associated to user
 */
const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers');

router.post('/login', controllers.userController.login)

module.exports = router;
