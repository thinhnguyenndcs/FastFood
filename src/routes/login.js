const express = require('express');
const router = express.Router();
const UserController = require('../controllers/LoginController');

router.get('/', (req, res, next) => {
    res.render('login');
});
router.get('/forgotpassword', (req, res, next) => {
    res.render('forgotpassword');
});
router.get('/signup', (req, res, next) => {
    res.render('signup');
});
// Post login data
// router.post('/', UserController.login);

module.exports = router;