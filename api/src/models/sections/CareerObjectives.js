const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const CareerObjectivesSchema = new mongoose.Schema({
    Text: {
        type: String,
        default: "Text ..."
    }
})

const CareerObjectives = mongoose.model("CareerObjectives", CareerObjectivesSchema);
module.exports = CareerObjectives;