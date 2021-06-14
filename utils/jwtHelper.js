/**
 * Author: Siraj
 * Create on Jun 14 2021
 * Module for JWT tokens
 */
const jwt = require('jsonwebtoken');


generateToken =  (data) => {
    //default is hmacsha256
    const token = jwt.sign(data, 'jiodsh7ftds7tf78sdg87cfss8dhfsdg8fgsd8gf8',{expiresIn:'180d'});
    return token
}

exports.generateToken = generateToken;
