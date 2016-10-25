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

checkConnection();

