const mongoose = require('mongoose');
const { Number, ObjectId } = mongoose.Schema.Types;

const CVSchema = new mongoose.Schema({
    CareerObjectives: { type: ObjectId, ref: "CareerObjectives" },
    Certificates: [{ type: ObjectId, ref: "Certificate" }],
    Educations: [{ type: ObjectId, ref: "Education" }],
    Experiences: [{ type: ObjectId, ref: "Experience" }],
    Languages: [{ type: ObjectId, ref: "Language" }],
    Memberships: [{ type: ObjectId, ref: "Memberships" }],
    OtherTrainings: [{ type: ObjectId, ref: "OtherTraining" }],
    PersonalInformation: { type: ObjectId, ref: "PersonalInformation" },
    PersonalSkills: [{ type: ObjectId, ref: "PersonalSkills" }],
    References: [{ type: ObjectId, ref: "Reference" }],
    Skill: [{ type: ObjectId, ref: "Skill" }],
    Order: { type: Number }
})

const CV = mongoose.model("CV", CVSchema);
module.exports = CV;