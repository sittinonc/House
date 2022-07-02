const express = require("express");
const router = express.Router()
const apiController = require('./apiController')

router.post('/post', apiController.PostHouse)
router.post('/patch', apiController.PatchHouse)
router.get('/list', apiController.ListHouse)
router.get('/suggest', apiController.ListSuggest)
router.delete('/delete', apiController.DeleteHouse)

module.exports = router