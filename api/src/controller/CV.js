const CV = require('../models/CV');
const CareerObjectives = require('../models/sections/CareerObjectives');
const Certificate = require('../models/sections/Certificate');
const Education = require('../models/sections/Education');
const Experience = require('../models/sections/Experience');
const Language = require('../models/sections/Language');
const Memberships = require('../models/sections/Memberships');
const OtherTraining = require('../models/sections/OtherTraining');
const PersonalInformation = require('../models/sections/PersonalInformation');
const TechnicalSkills = require('../models/sections/TechnicalSkills');
const Reference = require('../models/sections/Reference');
const Course = require('../models/sections/Course');
const Skill = require('../models/sections/Skill');
const User = require('../models/User');


exports.addCV = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .exec(async (err, user) => {
            const careerObjectives = new CareerObjectives({});
            const personalInformation = new PersonalInformation({});

            const co = await careerObjectives.save();
            const pi = await personalInformation.save();
            const hidden = {
                HideCareerObjectives: false,
                HideCertificates: false,
                HideEducations: false,
                HideExperiences: false,
                HideLanguages: false,
                HideMemberships: false,
                HideOtherTrainings: false,
                HidePersonalInformation: false,
                HideTechnicalSkills: false,
                HideReferences: false,
                HideSkill: false,
                HideCourses: false
            }
            const cv = new CV({
                CareerObjectives: careerObjectives,
                Certificates: [],
                Educations: [],
                Experiences: [],
                Languages: [],
                Memberships: [],
                OtherTrainings: [],
                PersonalInformation: personalInformation,
                TechnicalSkills: [],
                Reference: [],
                Skill: [],
                Courses: [],
                Name: "",
                Template: "",
                Language: "",
                CreatedDate: "",
                Order: 1,
                Hidden: hidden
            })

            cv.save()
                .then((savedCV) => {
                    let tmpCV = user.CV;
                    if (tmpCV === null) tmpCV = [];
                    tmpCV.push(savedCV._id);
                    user.updateOne({ CV: tmpCV })
                        .then(() => {
                            return res.status(200).json({
                                msg: "CV added successfuly",
                                data: {
                                    cv_id: savedCV._id,
                                    careerObjectives_id: co._id,
                                    personalInformation_id: pi._id,
                                }
                            })
                        })
                })
        })
}

exports.deleteCV = (req, res) => {
    CV.findOne({ _id: req.body.id }, (err, cv) => {
        CareerObjectives.deleteOne({ _id: cv.CareerObjectives._id }, (err) => {
            if (err) {
                return res.status(400).json({
                    err
                })
            }
            Certificate.deleteMany({ "_id": { $in: cv.Certificates } }, (err) => {
                if (err) {
                    return res.status(400).json({
                        err
                    })
                }
                Education.deleteMany({ "_id": { $in: cv.Educations } }, (err) => {
                    if (err) {
                        return res.status(400).json({
                            err
                        })
                    }
                    Experience.deleteMany({ "_id": { $in: cv.Experiences } }, (err) => {
                        if (err) {
                            return res.status(400).json({
                                err
                            })
                        }
                        Language.deleteMany({ "_id": { $in: cv.Languages } }, (err) => {
                            if (err) {
                                return res.status(400).json({
                                    err
                                })
                            }
                            Memberships.deleteMany({ "_id": { $in: cv.Memberships } }, (err) => {
                                if (err) {
                                    return res.status(400).json({
                                        err
                                    })
                                }
                                OtherTraining.deleteMany({ "_id": { $in: cv.OtherTrainings } }, (err) => {
                                    if (err) {
                                        return res.status(400).json({
                                            err
                                        })
                                    }
                                    PersonalInformation.deleteOne({ _id: cv.PersonalInformation }, (err) => {
                                        if (err) {
                                            return res.status(400).json({
                                                err
                                            })
                                        }
                                        TechnicalSkills.deleteMany({ "_id": { $in: cv.TechnicalSkills } }, (err) => {
                                            if (err) {
                                                return res.status(400).json({
                                                    err
                                                })
                                            }
                                            Reference.deleteOne({ _id: cv.Reference._id }, (err) => {
                                                if (err) {
                                                    return res.status(400).json({
                                                        err
                                                    })
                                                }
                                                Course.deleteMany({ "_id": { $in: cv.Courses } }, (err) => {
                                                    if (err) {
                                                        return res.status(400).json({
                                                            err
                                                        })
                                                    }
                                                    Skill.deleteMany({ "_id": { $in: cv.Skill } }, (err) => {
                                                        if (err) {
                                                            return res.status(400).json({
                                                                err
                                                            })
                                                        }
                                                        CV.deleteOne({ _id: req.body.id }, (err) => {
                                                            if (err) {
                                                                console.error(err);
                                                            }
                                                            User.findOne({ Email: req.body.Email })
                                                                .exec((err, user) => {
                                                                    if (err) {
                                                                        return res.status(400).json({
                                                                            msg: "Somethings went Wrong"
                                                                        });
                                                                    }
                                                                    if (user) {
                                                                        let tmpCV = user.CV;
                                                                        let index = -1;
                                                                        for (let i = 0; i < tmpCV.length; i++) {
                                                                            if (tmpCV[i].toString() === req.body.id) {
                                                                                index = i;
                                                                                break;
                                                                            }
                                                                        }
                                                                        if (index > -1) {
                                                                            tmpCV.splice(index, 1);
                                                                        }
                                                                        User.updateOne({ Email: req.body.Email }, { $set: { CV: tmpCV } })
                                                                            .then(() => {
                                                                                return res.status(200).json({
                                                                                    msg: "delete process completed successfuly"
                                                                                })
                                                                            })
                                                                    }
                                                                })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

exports.getAllCV = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .populate("CV")
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (user) {
                return res.status(200).json({
                    msg: "Cv retrived",
                    data: user.CV
                })
            }
        })
}

exports.getCV = (req, res) => {
    CV.findById(req.body._id).exec(async (err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "DB Error occured",
                err
            })
        }
        if (cv) {
            co = await CareerObjectives.findById(cv.CareerObjectives);
            pi = await PersonalInformation.findById(cv.PersonalInformation);
            cert = await Certificate.find({ _id: { $in: cv.Certificates } });
            edu = await Education.find({ _id: { $in: cv.Educations } });
            exp = await Experience.find({ _id: { $in: cv.Experiences } });
            lan = await Language.find({ _id: { $in: cv.Languages } });
            mem = await Memberships.find({ _id: { $in: cv.Memberships } });
            oth = await OtherTraining.find({ _id: { $in: cv.OtherTrainings } });
            tsk = await TechnicalSkills.find({ _id: { $in: cv.TechnicalSkills } });
            ref = await Reference.find({ _id: { $in: cv.References } });
            cor = await Course.find({ _id: { $in: cv.Courses } });
            skill = await Skill.find({ _id: { $in: cv.Skills } });
            return res.status(200).json({
                msg: "CV Data Returned Successfully",
                data: {
                    CareerObjectives: co,
                    Certificates: cert,
                    Educations: edu,
                    Experiences: exp,
                    Languages: lan,
                    Memberships: mem,
                    OtherTrainings: oth,
                    PersonalInformation: pi,
                    TechnicalSkills: tsk,
                    References: ref,
                    Courses: cor,
                    Skills: skill,
                    Name: cv.Name,
                    Template: cv.Template,
                    Language: cv.Language,
                    CreatedDate: cv.CreatedDate,
                    Hidden: cv.Hidden
                }
            })
        }
        else {
            return res.status(200).json({
                msg: "No CV Found"
            })
        }
    })
}

exports.updateName = (req, res) => {
    const { _id, Name } = req.body;
    CV.findById(_id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (cv) {
            CV.updateOne({ _id: _id }, {
                $set: {
                    Name: Name
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Name property updated successfully"
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No CV found",
            })
        }
    })
}

exports.updateTemplate = (req, res) => {
    const { _id, Template } = req.body;
    CV.findById(_id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (cv) {
            CV.updateOne({ _id: _id }, {
                $set: {
                    Template: Template
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Template property updated successfully"
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No CV found",
            })
        }
    })
}

exports.updateLanguage = (req, res) => {
    const { _id, Language } = req.body;
    CV.findById(_id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (cv) {
            CV.updateOne({ _id: _id }, {
                $set: {
                    Language: Language
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Language property updated successfully"
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No CV found",
            })
        }
    })
}

exports.updateCreatedDate = (req, res) => {
    const { _id, CreatedDate } = req.body;
    CV.findById(_id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (cv) {
            CV.updateOne({ _id: _id }, {
                $set: {
                    CreatedDate: CreatedDate
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "CreatedDate property updated successfully"
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No CV found",
            })
        }
    })
}