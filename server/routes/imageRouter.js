const express = require("express");
const router = express.Router()
const imageController = require('./imageController')
const multer = require('multer')

router.post('/upload/single', multer().single('file'), imageController.UploadSingle)
// router.post('/upload/multiple', multer().array('file', 5), imageController.UploadMultiple)
router.get('/view/:filename', imageController.View)
router.get('/list', imageController.List)

module.exports = router