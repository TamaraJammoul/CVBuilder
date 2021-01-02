const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const ExperienceSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Start: Number,
    End: Number,
    Project: String,
    Order: Number
});

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;