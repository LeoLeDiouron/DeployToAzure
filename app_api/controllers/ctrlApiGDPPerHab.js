const mongoose = require('mongoose');
const gdp_per_hab = mongoose.model('gdp_per_hab');

const listCountries = function(req, res) {
    gdp_per_hab.find({}, function(err, countries) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(countries)
        }
    })
};

const addCountry = function(req, res) {
    gdp_per_hab.create(req.body, function(err, newCountry) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newCountry)
        }
    })
};

module.exports = {
    listCountries,
    addCountry
}