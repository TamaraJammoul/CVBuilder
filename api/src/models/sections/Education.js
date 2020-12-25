const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const EducationSchema = new mongoose.Schema({
    UniversityName: String,
    Faculty: String,
    YearStart: Number,
    YearEnd: Number,
    DegreeFrom5: Number,
    DegreeFrom100: Number,
    Degree: String,
    Order: Number
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;