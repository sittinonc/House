const express = require("express");
const router = express.Router()
const apiController = require('./apiController')
const checkAuth = require("./checkAuth");

router.post('/post', checkAuth, apiController.PostHouse)
router.post('/patch', checkAuth, apiController.PatchHouse)
router.get('/list', apiController.ListHouse)
router.get('/suggest', apiController.ListSuggest)
router.delete('/delete/:_id', checkAuth, apiController.DeleteHouse)

module.exports = router