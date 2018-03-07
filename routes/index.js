var express = require('express');
var router = express.Router();
var sibisnisService = require('../services/sibisnis-services');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/timeout', function (req, res, next) {
  setTimeout(function () {
    res.json({status: true});
  }, 4000)
});

router.post('/timeout', function (req, res, next) {
  setTimeout(function () {
    res.json({status: true});
  }, 4000)
});

router.post('/sibisnis', function (req, res, next) {
  var fn = req.body.function;
  var response = {}
  if(fn == 'h2h-bayar') {
    response = sibisnisService[fn].pending;
    console.log('Sending pending on h2h-bayar')
  } else if (fn == 'h2h-cek-pending') {
      response = sibisnisService[fn].success;
      console.log(response)
  }

  res.json(response);
});

module.exports = router;
