const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const bolabio = require('./bolabio')
const login = require('./login')

router.get('/', Controller.login)

router.use("/bolabio", bolabio)
router.use("/login", login)


module.exports = router;
