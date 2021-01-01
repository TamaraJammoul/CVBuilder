const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const SkillSchema = new mongoose.Schema({
    Name: String,
    Order: Number
});

const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;
