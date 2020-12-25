const CV = require('../../models/CV');
const Experience = require('../../models/sections/Experience');

exports.addExperience = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
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
                    msg: "Somethings went Wrong",
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