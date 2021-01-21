const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const OtherTrainingSchema = new mongoose.Schema({
    Name: String,
    NameAr: String,
    Order: Number
});

const OtherTraining = mongoose.model("OtherTraining", OtherTrainingSchema);
module.exports = OtherTraining;