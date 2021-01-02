const mongoose = require("mongoose");
const { String, Number } = mongoose.Schema.Types;

const ReferenceSchema = new mongoose.Schema({
    Name: {
        type: String,
        default: "Name"
    },
    Number: {
        type: String,
    },
    Order: {
        type: Number,
        default: 0
    },
});

const Reference = mongoose.model("Reference", ReferenceSchema);
module.exports = Reference;