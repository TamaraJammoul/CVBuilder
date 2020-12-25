const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const ExperienceSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Start: Date,
    End: Date,
    Project: String,
    Order: Number
});

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;