const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const PersonalInformationSchema = new mongoose.Schema({
    Phone: {
        type: String,
        default: "Phone Number"
    },
    Email: {
        type: String,
        default: "Email"
    },
    LinkedIn: {
        type: String,
        default: "LinkedIn"
    },
    City: {
        type: String,
        default: "City"
    },
    Married: {
        type: String,
        default: "Married"
    },
    Birth: {
        type: Date,
        default: "2000-1-1"
    },
    Nationality: {
        type: String,
        default: "Nationality"
    },
    Order: {
        type: Number,
        default: 0
    },
});

const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationSchema);
module.exports = PersonalInformation;