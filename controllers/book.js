/**
 * Author: Siraj
 * Create on Jun 14 2021
 * Contains the handler functions of book
 */
const services = require('../services'),
    utils = require('../utils')

getAllBooks = async (req, res) => {
    try {
        const books = await services.bookService.getAllBooks()
        utils.responseHandler.writeResponseMessage(res, 200, 'ok', {books: books})
    } catch (err) {
        utils.logger.error(err)
        utils.responseHandler.writeResponseMessage(res, 200, 'error', '', err)
    }
}

exports.getAllBooks = getAllBooks;