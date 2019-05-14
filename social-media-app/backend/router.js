const UserController = require('./controllers/user-controller.js');
const router = require('express').Router();


// user controller
router.post('login', UserController.login);
router.post('signup', UserController.signup);

module.exports = router;