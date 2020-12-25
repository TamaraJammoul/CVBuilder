const mongoose = require('mongoose');
const { Number, String } = mongoose.Schema.Types;

const LanguageSchema = new mongoose.Schema({
    Name: String,
    Rate: Number,
    Order: Number
});

const Language = mongoose.model("Language", LanguageSchema);
module.exports = Language;