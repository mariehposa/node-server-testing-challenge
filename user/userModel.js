const db = require('../data/dbConfig');

function getUsers() {
    return db('project as p')
    .select('p.username')
}

function getUserId(id) {
    return db('project as p')
    .where('p.id', id)
    .select('p.username')
    .first()
}

function addUser(user) {
    return db('project as p')
    .insert(user)
    .then(([id]) => this.getUserId(id))
}

module.exports = {
    getUsers,
    getUserId,
    addUser
}