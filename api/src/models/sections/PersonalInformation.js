const mongoose = require('mongoose');
const { String, Date, Number } = mongoose.Schema.Types;

const PersonalInformationSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    FirstNameAr: {
        type: String,
        default: ""
    },
    LastNameAr: {
        type: String,
        default: ""
    },
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
    Country: {
        type: String,
        default: "Country"
    },
    MaritalStatus: {
        type: Number,
        default: 2  // 1  single    2 married
    },
    CityAr: {
        type: String,
        default: "City"
    },
    CountryAr: {
        type: String,
        default: "Country"
    },
    MaritalStatusAr: {
        type: Number,
        default: 2   // 1  single    2 married
    },
    Birth: {
        type: Date,
        default: "2000-1-1"
    },
    Nationality: {
        type: String,
        default: "Nationality"
    },
    NationalityAr: {
        type: String,
        default: "Nationality"
    },
    Image: {
        type: String,
    }
});

const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationSchema);
module.exports = PersonalInformation;