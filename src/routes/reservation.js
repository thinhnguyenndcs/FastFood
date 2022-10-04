const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('reservation');
});

// Post login data
// router.post('/', UserController.login);

module.exports = router;