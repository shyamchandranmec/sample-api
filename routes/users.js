var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  setTimeout(function () {
    res.json({status: true})
  },1000)

});

module.exports = router;
