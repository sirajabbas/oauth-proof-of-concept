/**
 * Author: Siraj
 * Create on Jun 14 2021
 * This file contains all the database methods associated to user
 */


getUserByUsername = async (username) => {
    const users = [
        {
            id: 1,
            username: 'user1',
            password: 'user1'
        },
        {
            id: 2,
            username: 'user2',
            password: 'user2'
        }, {
            id: 3,
            username: 'user3',
            password: 'user3'
        }
    ]
    return new Promise(resolve => {
        //mimicking the database query delay with setTimout function
        setTimeout(() => {
            resolve(users.find(u => u.username === username))
        }, 2000)
    })
}

exports.getUserByUsername = getUserByUsername;