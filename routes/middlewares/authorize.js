/**
 * Author: Siraj
 * Create on Jun 14 2021
 * middleware for request authorization
 */
const utils = require('../../utils'),
    jwt = require('jsonwebtoken');

oauthAuthorize = async (req, res, next) => {
    try {
        const authHeader = req.get('Authorization')
        console.log(authHeader)
        if (authHeader === undefined || authHeader === "") {
            return utils.responseHandler.writeResponseMessage(res, 401, 'unauthorized', 'you are unauthorized to access this resource')
        }
        try {
            const decoded = await jwt.verify(authHeader, 'jiodsh7ftds7tf78sdg87cfss8dhfsdg8fgsd8gf8')
            next()
        } catch (err) {
            utils.logger.error('Error decoding jwt token: ', err)
            return utils.responseHandler.writeResponseMessage(res, 500, 'internal server error')
        }
    } catch (err) {

    }
}

exports.oauthAuthorize = oauthAuthorize;