const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const TechnicalSkillsSchema = new mongoose.Schema({
    Name: String,
    NameAr: {
        type: String,
        default: ""
    },
    RateFrom5: Number,
    RateFrom100: Number,
    Order: Number
});

const TechnicalSkills = mongoose.model("TechnicalSkills", TechnicalSkillsSchema);
module.exports = TechnicalSkills;