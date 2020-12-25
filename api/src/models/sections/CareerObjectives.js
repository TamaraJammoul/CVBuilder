const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const CareerObjectivesSchema = new mongoose.Schema({
    Text: {
        type: String
    },
    Order: {
        type: Number
    }
})

const CareerObjectives = mongoose.model("CareerObjectives", CareerObjectivesSchema);
module.exports = CareerObjectives;