var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/ctrlMain');
var ctrlFootball = require('../controllers/ctrlFootball');
var ctrlGoldenBall = require('../controllers/ctrlGoldenBall');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/football', ctrlFootball.winnerlist);
router.get('/goldenball', ctrlGoldenBall.winnerlist);

module.exports = router;
