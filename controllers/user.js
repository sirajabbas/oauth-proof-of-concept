/**
 * Author: Siraj
 * Create on Jun 14 2021
 * Contains the handler functions of author
 */
const services = require('../services'),
    utils = require('../utils')

login = async (req, res) => {
    try {
        const username = req.body.username,
            scopes = req.body.scopes;
        const user = await services.userervice.getUserByUsername(username)
        if (!user) {
            return utils.responseHandler.writeResponseMessage(res, 200, 'ok', {success: false, message: 'invalid user'})
        }
        const jwtToken = utils.jwtHelper.generateToken({
            username: username,
            scopes: scopes
        })
        utils.responseHandler.writeResponseMessage(res, 200, 'ok', {success: true, token: jwtToken})
    } catch (err) {
        utils.logger.error(err)
        utils.responseHandler.writeResponseMessage(res, 200, 'error', '', err)
    }
}

exports.login = login;