const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res) {
    res.render('gdp_add');
}

const addData = function(req, res) {
    const path = '/api/gdp';

    const post_data = {
        country: req.body.country,
        gdp: req.body.gdp,
        rank: req.body.rank
    };

    const request_options = {
        url: apiURL.server + path,
        method: 'POST',
        json: post_data
    };

    request(request_options, function(err, response) {
        if (response.statusCode === 201)
            res.redirect('/gdp');
        else {
            res.render('error', {message: 'Error adding data: ' + response.statusMessage + ' (' + response.statusCode + ')'});
        }
    });
}

const deleteData = function(req, res) {
    const path = '/api/gdp/delete';

    const delete_data = {
        country: req.body.country
    };

    const request_options = {
        url: apiURL.server + path,
        method: 'POST',
        json: delete_data
    };

    request(request_options, function(err, response) {
        if (response.statusCode === 200) {
            countries(req, res);
        } else {
            res.render('error', {message: 'Error delete datas'});
        }
    });
}

const countries = function(req,res) {
    const path = '/api/gdp';
    const requestOptions = {
        url:apiURL.server+path,
        method:'GET',
        json:{},
        qs:{}
    };

    request(requestOptions, function(err, response, body) {
        if (err) {
            res.render('error', {message:err.message});
        } else if (response.statusCode !== 200) {
            res.render('error', {message:'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ")"});
        } else if (!(body instanceof Array)) {
            res.render('error', {message:'Unexpected response data'});
        } else if (!body.length) {
            res.render('error', {message: 'No documents in collection'});
        } else {
            res.render('gdp', {countries:body});
        }
    })
}

module.exports = {
    countries,
    showForm,
    addData,
    deleteData
};
