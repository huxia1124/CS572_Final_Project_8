var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    firstName: String,
    lastName: String,
    country: String,
    major: String,
    entry: String,
    courses: [Schema.Types.ObjectId]
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;