const mongoose = require('mongoose');
const { String, ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    FirstNameAr: {
        type: String,
        default: ""
    },
    LastName: {
        type: String
    },
    LastNameAr: {
        type: String,
        default: ""
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    CV: [{ type: ObjectId, ref: "CV" }]
});


const User = mongoose.model("User", UserSchema);
module.exports = User;