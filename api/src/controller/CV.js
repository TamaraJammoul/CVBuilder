const CV = require('../models/CV');
const CareerObjectives = require('../models/sections/CareerObjectives');
const Certificate = require('../models/sections/Certificate');
const Education = require('../models/sections/Education');
const Experience = require('../models/sections/Experience');
const Language = require('../models/sections/Language');
const Memberships = require('../models/sections/Memberships');
const OtherTraining = require('../models/sections/OtherTraining');
const PersonalInformation = require('../models/sections/PersonalInformation');
const PersonalSkills = require('../models/sections/PersonalSkills');
const Reference = require('../models/sections/Reference');
const Skill = require('../models/sections/Skill');
const User = require('../models/User');


exports.addCV = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .exec(async (err, user) => {
            const careerObjectives = new CareerObjectives({});
            const personalInformation = new PersonalInformation({});
            const reference = new Reference({});

            const co = await careerObjectives.save();
            const pi = await personalInformation.save();

            const cv = new CV({
                CareerObjectives: careerObjectives,
                Certificates: [],
                Educations: [],
                Experiences: [],
                Languages: [],
                Memberships: [],
                OtherTrainings: [],
                PersonalInformation: personalInformation,
                PersonalSkills: [],
                Reference: [],
                Skill: [],
                Order: 1
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
                                        PersonalSkills.deleteMany({ "_id": { $in: cv.PersonalSkills } }, (err) => {
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
            psk = await PersonalSkills.find({ _id: { $in: cv.PersonalSkills } });
            ref = await Reference.find({ _id: { $in: cv.References } });
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
                    PersonalSkills: psk,
                    References: ref,
                    Skills: skill
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