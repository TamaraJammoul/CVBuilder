const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const EducationSchema = new mongoose.Schema({
    UniversityName: String,
    UniversityNameAr: String,
    Faculty: String,
    FacultyAr: String,
    YearStart: Number,
    YearEnd: Number,
    Grade: Number, //1 good    2 very good     3 excellant
    Degree: Number,
    DegreeFrom5: Number,
    DegreeFrom10: Number,
    DegreeFrom100: Number,
    Order: Number
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;