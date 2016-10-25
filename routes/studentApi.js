var express = require('express');
var router = express.Router();

//Api implementations
router.get('/api', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
