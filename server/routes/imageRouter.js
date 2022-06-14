const express = require("express");
const router = express.Router()
const imageController = require('./imageController')

router.get('/view', imageController.View)

module.exports = router