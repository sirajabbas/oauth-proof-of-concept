/**
 * Author: Siraj
 * Create on Jun 13 2021
 * This file contains all the api routes associated to authors
 */
const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers');

router.get('/all', controllers.authorController.getAllAuthors)


module.exports = router;
