var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('My deployment github repository can be found at https://github.com/LeoLeDiouron/DeployToAzure\n');
});

module.exports = router;