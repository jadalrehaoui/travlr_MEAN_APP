var express = require('express');
var controllers = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', controllers.home);

router.get('/travel', controllers.travel)

router.get('/rooms', controllers.rooms)

router.get('/meals', controllers.meals)

router.get('/news', controllers.news)

router.get('/about', controllers.about)

router.get('/contact', controllers.contact)

module.exports = router;
