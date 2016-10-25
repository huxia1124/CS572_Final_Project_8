var express = require('express');
var router = express.Router();
var Student = require('../model/studentSchema');

/*
var mongoose = require('mongoose');


var connected = false;

function checkConnection() {
  if(connected) {
    return;
  }

  mongoose.connect('mongodb://demo:DemoPassword123@ds013366.mlab.com:13366/sandbox', function(err) {
    if(err) throw err;
    connected = true;
  });
}
*/
//Api implementations
router.get('/', function(req, res, next) {
  res.render('student.jade', {});
});

router.get('/new', function(req, res, next) {
  res.render('newstudent.jade', {
    countries: ["USA", "Nepal"],
    programs: ["ComPro", "MBA", "Accounting"],
    entries: ["April,2016", "August,2016"]
  });
});

router.get('/allstudents', function(req, res, next) {
  //checkConnection();
  Student.find({}, function(err, students) {
    if(err) throw err;
    res.render('allstudents.jade', {students: students});
  })
});

module.exports = router;
