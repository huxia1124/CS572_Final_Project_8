var express = require('express');
var router = express.Router();
var Course = require('../model/courseSchema');
require('../mongoconnection');

router.get('/', function(req, res, next) {
    Course.find({}, function(err, courses) {
        if(err) throw err;
        res.json(courses);
    });
});

router.post('/', function(req, res, next) {
    var newCourse = new Course({
        department: req.body.department,
        code: req.body.code,
        title: req.body.title
    });
    //console.log("newCourse" + newCourse)
    newCourse.save(function(err,course) {
        if(err) throw err;
        res.json(course);
    })
});

router.delete('/:id', function(req, res, next) {
    Course.remove({"_id" : req.params.id}, function(err,course) {
        if(err) throw err;
        res.json(course);
    });
});

module.exports = router;