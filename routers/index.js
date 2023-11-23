const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.home); // Home page

router.get('/home1', Controller.home1); // Home page

router.get('/register', Controller.register); // Register page => only for users

router.post('/register', Controller.register);

router.get('/login', Controller.login); // Login page => for users and admins

router.post('/login', Controller.login);

router.get('/logout', Controller.logout); // Logout route

router.get('/bio', Controller.showAllBio);

router.get('/user', Controller.showAllUsers);

router.get('/add', Controller.addBio);

router.post('/add', Controller.postAddBio);

router.post('/:id/edit', Controller.editBio);

router.get("/:id", Controller.detailBio)

router.get("/:id/edit", Controller.editBio)

router.post("/:id/edit", Controller.editBio)

router.get("/:id/delete", Controller.delete)

router.post('/updateUserRole', Controller.updateUserRole);

module.exports = router;
