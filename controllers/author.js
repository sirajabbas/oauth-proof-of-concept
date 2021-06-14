/**
 * Author: Siraj
 * Create on Jun 14 2021
 * Contains the handler functions of author
 */
const services = require('../services'),
    utils = require('../utils')

getAllAuthors = async (req, res) => {
    try {
        const authors = await services.authorService.getAllAuthors()
        utils.responseHandler.writeResponseMessage(res, 200, 'ok', {authors: authors})
    } catch (err) {
        utils.logger.error(err)
        utils.responseHandler.writeResponseMessage(res, 200, 'error', '', err)
    }
}

exports.getAllAuthors = getAllAuthors;