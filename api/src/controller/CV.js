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
const Referance = require('../models/sections/Referance');
const Skill = require('../models/sections/Skill');
const User = require('../models/User');


exports.addCV = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .exec(async (err, user) => {
            const careerObjectives = new CareerObjectives({});
            const personalInformation = new PersonalInformation({});
            const referance = new Referance({});

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
                Referance: [],
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
                                            Referance.deleteOne({ _id: cv.Referance._id }, (err) => {
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