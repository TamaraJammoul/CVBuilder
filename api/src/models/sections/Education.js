const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const EducationSchema = new mongoose.Schema({
    UniversityName: String,
    UniversityNameAr: String,
    Faculty: String,
    FacultyAr: String,
    YearStart: Number,
    YearEnd: Number,
    Grade: String,
    GradeAr: String,
    DegreeFrom5: Number,
    DegreeFrom10: Number,
    DegreeFrom100: Number,
    Order: Number
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;