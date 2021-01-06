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
    TechnicalSkills: [{ type: ObjectId, ref: "TechnicalSkills" }],
    References: [{ type: ObjectId, ref: "Reference" }],
    Skill: [{ type: ObjectId, ref: "Skill" }],
    Courses: [{ type: ObjectId, ref: "Course" }],
    Name: String,
    Template: String,
    Language: String,
    CreatedDate: Date,
    Order: { type: Number }
})

const CV = mongoose.model("CV", CVSchema);
module.exports = CV;