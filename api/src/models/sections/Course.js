const mongoose = require("mongoose");
const { String, Number } = mongoose.Schema.Types;

const CourseSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Year: Number,
    Order: Number
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;