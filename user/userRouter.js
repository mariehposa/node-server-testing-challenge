const express = require('express')
const bcrypt = require('bcrypt')
const db = require('./userModel')
const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(400).json({
            message: 'Cannot get users' + err.message
        })
    })
})

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    db.addUser(user)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Couldnt register user' + err.message
        })
    })
})

module.exports = router;