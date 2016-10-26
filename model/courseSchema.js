var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    department: String,
    code: String,
    title: String,
    student: [Schema.Types.ObjectId]
});

var Course = mongoose.model('sms', courseSchema);

module.exports = Course;