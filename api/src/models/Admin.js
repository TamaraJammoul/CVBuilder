const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    Email: {
        type: String,
    },
    Password: {
        type: String,
        default: "admin123"
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;