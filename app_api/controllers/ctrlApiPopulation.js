const mongoose = require('mongoose');
const population = mongoose.model('population');

const listCountries = function(req, res) {

    population.find({}, function(err, countries) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(countries)
        }
    })
};

const addCountry = function(req, res) {
    population.create(req.body, function(err, newCountry) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newCountry);
        }
    })
};

module.exports = {
    listCountries,
    addCountry
}