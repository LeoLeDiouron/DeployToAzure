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

router
    .route('/population/add')
    .get(ctrlPopulation.showForm)
    .post(ctrlPopulation.addData);

router
    .route('/population/delete')
    .post(ctrlPopulation.deleteData);

router
    .route('/gdp/add')
    .get(ctrlGDP.showForm)
    .post(ctrlGDP.addData);

router
    .route('/gdp/delete')
    .post(ctrlGDP.deleteData);

router
    .route('/gdpperhab/add')
    .get(ctrlGDPPerHab.showForm)
    .post(ctrlGDPPerHab.addData);

router
    .route('/gdpperhab/delete')
    .post(ctrlGDPPerHab.deleteData);

module.exports = router;
