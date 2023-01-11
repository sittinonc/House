const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const checkAuth = require('../middlewares/checkAuth');

router.post('/login', authController.postLogin);
router.get('/login', authController.getLogin);
router.post('/logout', checkAuth, authController.Logout);

module.exports = router;
