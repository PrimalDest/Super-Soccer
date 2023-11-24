const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.home); // halaman rumah

router.get('/home1', Controller.home1); // halaman rumah

router.get('/register', Controller.register); // register page => hanya untuk user

router.post('/register', Controller.register);

router.get('/login', Controller.login); // login page => user dan admin

router.post('/login', Controller.login);

router.post('/logout', Controller.logout);

router.get("/bio", Controller.showAllBio)

router.get('/user', Controller.showAllUsers)

router.get("/add", Controller.addBio)

router.post("/add", Controller.postAddBio)

router.get("/bio/search", Controller.search)

router.get("/:id", Controller.detailBio)

router.get("/:id/edit", Controller.editBio)

router.post("/:id/edit", Controller.postEditBio)

router.post("/:id/like", Controller.like)

router.get("/delete/:id", Controller.delete)


module.exports = router;
