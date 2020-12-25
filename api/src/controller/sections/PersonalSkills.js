const CV = require('../../models/CV');
const PersonalSkills = require('../../models/sections/PersonalSkills');


exports.addPersonalSkills = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                const { Name, Order } = req.body;
                let personalSkills = new PersonalSkills({ Name, Order });
                personalSkills.save()
                    .then((psk) => {
                        let tmpPersonalSkills = cv.PersonalSkills;
                        tmpPersonalSkills.push(psk._id);
                        cv.updateOne({ PersonalSkills: tmpPersonalSkills })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "PersonalSkills added successfuly",
                                    data: tmpPersonalSkills
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

exports.deletePersonalSkills = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                let tmpPersonalSkills = cv.PersonalSkills;
                let index = -1;
                for (let i = 0; i < tmpPersonalSkills.length; i++) {
                    if (tmpPersonalSkills[i].toString() === req.body.personalSkill_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpPersonalSkills.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { PersonalSkills: tmpPersonalSkills } })
                    .then(() => {
                        PersonalSkills.deleteOne({ _id: req.body.personalSkill_id }).then(() => {
                            return res.status(200).json({
                                msg: "PersonalSlills deleted",
                                data: tmpPersonalSkills
                            })
                        })
                    })
            }
        })
}