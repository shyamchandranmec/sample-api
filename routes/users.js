var express = require('express');
var router = express.Router();

var gcm = require("node-gcm");

/* GET users listing. */
router.get('/', function (req, res, next) {
  setTimeout(function () {
    res.json({status: true})
  }, 1000)

});

router.get('/fcm', function (req, res, next) {
  var sender = new gcm.Sender("Your_Firebase_Cloud_Messaging_token");

  var message = new gcm.Message({
    notification: {
      title: "Hello World! ",
      icon: "your_icon_name",
      body: "Here is a notification's body."
    },
  });

  var recipients = gcm.IRecipient = {to: "/topics/all"};


  setTimeout(function () {
    sender.sendNoRetry(message, recipients, function (err, response) {
      if (err) console.error(err);
      else console.log(response);
    });
    res.json({status: true})
  }, 1000)

});

module.exports = router;
