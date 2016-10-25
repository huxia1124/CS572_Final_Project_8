var express = require('express');
var router = express.Router();

//Api implementations
router.get('/api', function(req, res, next) {
    res.send('course api');
});



module.exports = router;