const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.home); // halaman rumah

router.get('/home1', Controller.home1); // halaman rumah

router.get('/register', Controller.register); // register page => hanya untuk user

router.post('/register', Controller.register);

router.get('/login', Controller.login); // login page => user dan admin

router.post('/login', Controller.login);

router.get('/logout', Controller.logout); // logout route

router.get("/bio", Controller.showAllBio)

router.get("/add", Controller.addBio)



// router.get("/search", Controller.search)

// router.get("/:id", Controller.detail)

router.post("/add", Controller.postAddBio)

router.post("/:id/edit", Controller.editBio)

router.get("/:id/delete", Controller.delete)


module.exports = router;
