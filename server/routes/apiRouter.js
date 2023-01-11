const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const checkAuth = require('../middlewares/checkAuth');

router.post('/post', checkAuth, apiController.PostHouse);
router.post('/patch', checkAuth, apiController.PatchHouse);
router.get('/list', apiController.ListHouse);
router.get('/findbyname/:name', apiController.FindHouse);
router.get('/search/', apiController.SearchHouse);
router.get('/suggest', apiController.ListSuggest);
router.post('/interest', apiController.InterestHouse);
router.post('/subscribe', apiController.Subscribe);
router.delete('/delete/:_id', checkAuth, apiController.DeleteHouse);

module.exports = router;
