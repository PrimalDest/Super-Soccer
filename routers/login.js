const express = require('express')
const login = express.Router()
const controller = require('./controller')

login.get('/login', controller.loginPage)
// login.post('/login', controller.postLogin)

module.exports = router