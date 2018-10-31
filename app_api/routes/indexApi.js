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

// gdp per habitant
router
    .route('/gdp_per_hab')
    .get(ctrlApiGDPPerHab.listCountries)
    .post(ctrlApiGDPPerHab.addCountry)

// population
router
    .route('/population')
    .get(ctrlApiPopulation.listCountries)
    .post(ctrlApiPopulation.addCountry)

module.exports = router;