/**
 * Author: Siraj
 * Create on Jun 14 2021
 * This file contains all the database methods associated to authors
 */


getAllAuthors = async () => {
    return new Promise(resolve => {
        //mimicking the database query delay with setTimout function
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Dr. A.P.J. Abdul Kalam'
                }, {
                    id: 2,
                    name: 'Dr. Bibek Debroy'
                },
                {
                    id: 3,
                    name: 'Dr. Krishna Saksena'
                },
                {
                    id: 4,
                    name: 'Dr. Y.V. Reddy'
                }, {
                    id: 5,
                    name: 'Margaret Atwood'
                },


            ])
        }, 2000)
    })
}

exports.getAllAuthors = getAllAuthors;