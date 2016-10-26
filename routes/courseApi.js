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

module.exports = router;