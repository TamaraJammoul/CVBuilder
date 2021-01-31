const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const OtherTrainingSchema = new mongoose.Schema({
    Name: String,
    NameAr: {
        type: String,
        default: ""
    },
    Order: Number
});

const OtherTraining = mongoose.model("OtherTraining", OtherTrainingSchema);
module.exports = OtherTraining;