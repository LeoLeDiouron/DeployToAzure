const express = require('express');
const router = express.Router();

const ctrlApiGDP = require('../controllers/ctrlApiGDP');
const ctrlApiGDPPerHab = require('../controllers/ctrlApiGDPPerHab');
const ctrlApiPopulation = require('../controllers/ctrlApiPopulation');

// gdp
router
    .route('/gdp')
    .get(ctrlApiGDP.listCountries)
    .post(ctrlApiGDP.addCountry)

// delete gdp
router
    .route('/gdp/delete')
    .post(ctrlApiGDP.deleteCountry)

// gdp per habitant
router
    .route('/gdp_per_hab')
    .get(ctrlApiGDPPerHab.listCountries)
    .post(ctrlApiGDPPerHab.addCountry)

// delete gdp per habitant
router
    .route('/gdp_per_hab/delete')
    .post(ctrlApiGDPPerHab.deleteCountry)

// population
router
    .route('/population')
    .get(ctrlApiPopulation.listCountries)
    .post(ctrlApiPopulation.addCountry)

// delete population
router
    .route('/population/delete')
    .post(ctrlApiPopulation.deleteCountry)

module.exports = router;