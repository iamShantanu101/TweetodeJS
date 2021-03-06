// ## Tweet Controller
var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');
var User = mongoose.model('User');
var _ = require('underscore');

exports.tweetList = function(req, res) {
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
  var perPage = 15;
  var options = {
    perPage: perPage,
    page: page
  };

  Tweet.limitedList(options, function(err, tweets) {
    if (err) {
      return res.render('500');
    }
    Tweet.count().exec(function(err, count) {
      if (err) {
        return res.render('500');
      }
      res.send(tweets);
    });
  });
};

exports.usersList = function (req, res) {
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
  var perPage = 15;
  var options = {
    perPage: perPage,
    page: page
  };

  User.list(options, function(err, users) {
    if (err) {
      return res.render('500');
    }
    User.count().exec(function(err, count) {
      if (err) {
        return res.render('500');
      }
      res.send(users);
    });
  });
};
