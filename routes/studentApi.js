var express = require('express');
var router = express.Router();
var Student = require('../model/studentSchema');
require('../mongoconnection');

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
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

  req.assert('firstName', 'First name can not be empty!').notEmpty();
  req.assert('lastName', 'Last name can not be empty!').notEmpty();

    var errors = req.validationErrors();
    if(errors) {
      res.render('newstudent.jade', {errors: errors, countries: ["USA", "Nepal"],
    programs: ["ComPro", "MBA", "Accounting"],
    entries: ["April,2016", "August,2016"]});
      return;
    }


  //checkConnection();
  var newStudent = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      major: req.body.major,
      entry: req.body.entry
    });

  newStudent.save(function(err) {
    if(err) throw err;
    res.redirect('/student/allstudents');
  })
});


module.exports = router;
