const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const CertificateSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Year: Number,
    Order: Number
})

const Certificate = mongoose.model("Certificate", CertificateSchema);
module.exports = Certificate;