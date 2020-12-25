const CV = require('../../models/CV');
const Skill = require('../../models/sections/Skill');

exports.addSkill = (req, res) => {
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
                    Name, Logo, Order
                } = req.body;
                let skill = new Skill({
                    Name, Logo, Order
                });
                skill.save()
                    .then((skl) => {
                        let tmpSkills = cv.Skill;
                        tmpSkills.push(skl._id);
                        cv.updateOne({ Skill: tmpSkills })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Skill added successfuly",
                                    data: skl
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

exports.deleteSkill = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                let tmpSkills = cv.Skill;
                let index = -1;
                for (let i = 0; i < tmpSkills.length; i++) {
                    if (tmpSkills[i].toString() === req.body.skill_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpSkills.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Skill: tmpSkills } })
                    .then(() => {
                        Skill.deleteOne({ _id: req.body.skill_id }).then(() => {
                            return res.status(200).json({
                                msg: "skill deleted",
                                data: tmpSkills
                            })
                        })
                    })
            }
        })
}