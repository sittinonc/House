const express = require("express");
const router = express.Router()
const imageController = require('./imageController')
const multer = require('multer')
const checkAuth = require('./checkAuth')

// router.post('/upload/multiple', multer().array('file', 5), imageController.UploadMultiple)
router.get('/view/:filename', imageController.View)
router.get('/list', imageController.List)
router.post('/upload/single', checkAuth, multer().single('file'), imageController.UploadSingle)
router.delete('/delete/:filename', checkAuth, imageController.Delete)

module.exports = router