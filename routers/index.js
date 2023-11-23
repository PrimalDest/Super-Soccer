const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const bolabio = require('./bolabio')

router.get('/', Controller.home)

router.use("/bolabio", bolabio)



module.exports = router