var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/ctrlMain');
var ctrlGDP = require('../controllers/ctrlGDP');
var ctrlPopulation = require('../controllers/ctrlPopulation');
var ctrlGDPPerHab = require('../controllers/ctrlGDPPerHab')

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/gdp', ctrlGDP.countries);
router.get('/population', ctrlPopulation.countries);
router.get('/gdpperhab', ctrlGDPPerHab.countries);

module.exports = router;
