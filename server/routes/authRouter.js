const express = require("express");
const router = express.Router()
const authController = require('./authController')

router.post('/login', authController.postLogin)
router.get('/login', authController.getLogin)
router.post('/logout', authController.Logout)

module.exports = router