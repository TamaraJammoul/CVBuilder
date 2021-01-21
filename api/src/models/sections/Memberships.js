const mongoose = require("mongoose");
const { String, Number } = mongoose.Schema.Types;

const MembershipsSchema = new mongoose.Schema({
    Name: String,
    NameAr: String,
    Order: Number
});

const Memberships = mongoose.model("Memberships", MembershipsSchema);
module.exports = Memberships;