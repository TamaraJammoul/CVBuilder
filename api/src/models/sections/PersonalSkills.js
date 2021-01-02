const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const PersonalSkillsSchema = new mongoose.Schema({
    Name: String,
    RateFrom5: Number,
    RateFrom100: Number,
    Order: Number
});

const PersonalSkills = mongoose.model("PersonalSkills", PersonalSkillsSchema);
module.exports = PersonalSkills;