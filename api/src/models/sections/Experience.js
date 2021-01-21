const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const ExperienceSchema = new mongoose.Schema({
    Name: String,
    NameAr: String,
    Description: String,
    DescriptionAr: String,
    Start: Number,
    End: Number,
    Project: String,
    ProjectAr: String,
    Order: Number
});

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;