const mongoose = require("mongoose")

const coursestateSchema = new mongoose.Schema({
  detnum:String,
  runclass: String,
  courseTotal: String,
  teacherTotal: String,
  studentTotal: String
});

const course = mongoose.model('classnumbers', coursestateSchema);

module.exports=course;