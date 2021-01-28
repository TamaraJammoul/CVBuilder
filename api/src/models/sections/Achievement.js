const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const AchievementSchema = new mongoose.Schema({
    Name: String,
    NameAr: String,
    Order: Number
});

const Achievement = mongoose.model("Achievement", AchievementSchema);
module.exports = Achievement;