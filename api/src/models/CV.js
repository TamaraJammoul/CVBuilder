const mongoose = require('mongoose');
const { Number, ObjectId } = mongoose.Schema.Types;

const hiddenSchema = new mongoose.Schema({
    HideCareerObjectives: { type: Boolean, default: false },
    HideCertificates: { type: Boolean, default: false },
    HideEducations: { type: Boolean, default: false },
    HideExperiences: { type: Boolean, default: false },
    HideLanguages: { type: Boolean, default: false },
    HideMemberships: { type: Boolean, default: false },
    HideOtherTrainings: { type: Boolean, default: false },
    HidePersonalInformation: { type: Boolean, default: false },
    HideTechnicalSkills: { type: Boolean, default: false },
    HideReferences: { type: Boolean, default: false },
    HideSkill: { type: Boolean, default: false },
    HideCourses: { type: Boolean, default: false }
})

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
    EditedDate: Date,
    Order: { type: Number },
    Hidden: hiddenSchema
})

const CV = mongoose.model("CV", CVSchema);
module.exports = CV;