const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.use("/", login)
router.get("/bio", Controller.showAllBio)
router.get("/bio/add", Controller.addBio)
router.post("/add", Controller.postAddBio)
router.get("/bio/search", Controller.search)
router.get("/bio/:id", Controller.detail)
router.post("/bio/:id/edit", Controller.editBio)
router.get("/bio/:id/delete", Controller.delete)

module.exports = router