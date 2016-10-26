var express = require('express');
var router = express.Router();
require('../mongoconnection');
var Course = require('../model/courseSchema');

//Api implementations
router.get('/', function(req, res, next) {
    Course.find(function (err, courses) {
        if(err){
            res.send(err);
        }
        res.json(courses);
    })
});

router.get('/allcourses', function(req, res, next) {
    //checkConnection();
    Course.find({}, function(err, courses) {
        if(err) throw err;
        res.render('allcourse.jade', {courses: courses});
    })
});

router.get('/:id', function(req, res, next) {
    Course.findOne(function (err, courses) {
        if(err){
            res.send(err);
        }
        res.json(courses);
    })
});

module.exports = router;