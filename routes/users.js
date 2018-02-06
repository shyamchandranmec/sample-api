var express = require('express');
var router = express.Router();

var FCM = require('fcm-node');


/* GET users listing. */
router.get('/', function (req, res, next) {
  setTimeout(function () {
    res.json({status: true})
  }, 1000)

});

router.get('/fcm', function (req, res, next) {

  var serverKey = 'AAAAnCJUYQg:APA91bEVTXBdKwGrE-lzMYyCEe5TUVaUm1KveQEKvEiLVsdojcnKcwAnqhBAtmE2BSMUMpW2FLQMaD2FJbMt5gtt3XiH1uUMfeUOf3eFN0kOgJGlqq1_fHqLtvgoMMND7oFVEZKgYus2';
  var fcm = new FCM(serverKey);

  var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: '/topics/news',
    collapse_key: 'your_collapse_key',

    notification: {
      title: 'Title of your push notification',
      body: 'Body of your push notification'
    },

    data: {  //you can send only notification or only data(or include both)
      my_key: 'my value',
      my_another_key: 'my another value'
    }
  };

  fcm.send(message, function(err, response){
    if (err) {
      console.log("Something has gone wrong!", err);
      res.json({failed: true})
    } else {
      console.log("Successfully sent with response: ", response);
      res.json({success: true})
    }
  });

});

module.exports = router;
