/**
 * Author: Siraj
 * Create on Jun 14 2021
 * This file contains all the database methods associated to books
 */


getAllBooks = async () => {
    return new Promise(resolve => {
        //mimicking the database query delay with setTimout function
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: ' In Search of Lost Time by Marcel Proust. ...'
                }, {
                    id: 2,
                    name: 'Ulysses by James Joyce. .'
                },
                {
                    id: 3,
                    name: ' Don Quixote by Miguel de Cervantes.'
                },
                {
                    id: 4,
                    name: 'The Great Gatsby by F...'
                }

            ])
        }, 2000)
    })
}

exports.getAllBooks = getAllBooks;