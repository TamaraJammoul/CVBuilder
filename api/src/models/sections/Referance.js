const mongoose = require("mongoose");
const { String, Number } = mongoose.Schema.Types;

const ReferanceSchema = new mongoose.Schema({
    Name: {
        type: String,
        default: "Name"
    },
    Order: {
        type: Number,
        default: 0
    },
});

const Referance = mongoose.model("Referance", ReferanceSchema);
module.exports = Referance;