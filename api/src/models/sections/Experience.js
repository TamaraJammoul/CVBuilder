const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const ExperienceSchema = new mongoose.Schema({
    Name: String,
    NameAr: {
        type: String,
        deafult: ""
    },
    Description: String,
    DescriptionAr: {
        type: String,
        deafult: ""
    },
    Start: Number,
    End: Number,
    Project: String,
    ProjectAr: {
        type: String,
        deafult: ""
    },
    Order: Number
});

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;