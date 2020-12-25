const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const PersonalInformationSchema = new mongoose.Schema({
    Phone: String,
    Email: String,
    LinkedIn: String,
    City: String,
    Married: String,
    Birth: Date,
    Nationality: String,
    Order: Number
});

const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationSchema);
module.exports = PersonalInformation;