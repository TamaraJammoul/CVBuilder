const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const CertificateSchema = new mongoose.Schema({
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
    Year: Number,
    Order: Number
})

const Certificate = mongoose.model("Certificate", CertificateSchema);
module.exports = Certificate;