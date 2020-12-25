const mongoose = require("mongoose");
const { String, Number } = mongoose.Schema.Types;

const ReferanceSchema = new mongoose.Schema({
    Name: String,
    Whatsapp: String,
    Order: Number
});

const Referance = mongoose.model("Referance", ReferanceSchema);
module.exports = Referance;