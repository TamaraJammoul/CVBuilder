const CV = require('../../models/CV');
const Experience = require('../../models/sections/Experience');

exports.addExperience = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                const {
                    Name, Description, Start, End, Project, Order
                } = req.body;
                let experience = new Experience({
                    Name, Description, Start, End, Project, Order
                });
                experience.save()
                    .then((exp) => {
                        let tmpExperiences = cv.Experiences;
                        tmpExperiences.push(exp._id);
                        cv.updateOne({ Experiences: tmpExperiences })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Experience added successfuly",
                                    data: exp
                                })
                            })
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV found"
                })
            }
        })
}

exports.deleteExperience = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpExperiences = cv.Experiences;
                let index = -1;
                for (let i = 0; i < tmpExperiences.length; i++) {
                    if (tmpExperiences[i].toString() === req.body.experience_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpExperiences.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Experiences: tmpExperiences } })
                    .then(() => {
                        Experience.deleteOne({ _id: req.body.experience_id }).then(() => {
                            return res.status(200).json({
                                msg: "experience deleted",
                                data: tmpExperiences
                            })
                        })
                    })
            }
        })
}

exports.updateExperience = (req, res) => {
    const { _id, Name, Description, Start, End, Project, Order } = req.body;
    Experience.findById(_id).exec((error, experience) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (experience) {
            Experience.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Description,
                    Start,
                    End,
                    Project,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Experience updated successfully",
                    data: {
                        _id,
                        Name,
                        Description,
                        Start,
                        End,
                        Project,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Experience found",
            })
        }
    })
}

exports.getExperiences = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Experience.find({ _id: { $in: cv.Experiences } })
                    .exec((err, exp) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (exp) {
                            return res.status(200).json({
                                msg: "Experiences returned successfully",
                                data: exp
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    err
                })
            }
        })
}