var express = require('express');
var router = express.Router();

//Api implementations
router.get('/', function(req, res, next) {
    res.send('course de');
});



module.exports = router;