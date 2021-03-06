var express = require('express');
var router  = express.Router();
var path    = require('path');
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index');
});

// Returns the game data..
router.get('/scores', function(req, res, next) {
  request('http://live.nhl.com/GameData/Scoreboard.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      var json = JSON.parse(body);
      res.json(json);
    }
  });
});

// Returns the stream links..
router.get('/gameurl/:year/:season/:game', function(req, res, next) {
    request('http://smb.cdnak.neulion.com/fs/nhl/mobile/feed_new/data/streams/'+req.params.year+'/ipad/'+req.params.season+'_'+req.params.game+'.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            var json = JSON.parse(body);
            res.json(json);
        }
    });
});

module.exports = router;
