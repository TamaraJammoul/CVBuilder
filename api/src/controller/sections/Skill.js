const CV = require('../../models/CV');

exports.addSkill = (req, res) => {
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
                    skills
                } = req.body;
                console.log(skills)

                cv.updateOne({ Skill: skills })
                    .then(() => {
                        return res.status(200).json({
                            msg: "Skill added successfuly",
                            status: 1,
                            skills
                        })
                    })

            }
            else {
                return res.status(200).json({
                    msg: "No CV found",
                    status: 0,
                })
            }
        })
}

exports.getSkills = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                return res.status(200).json({
                    msg: "Skills returned successfully",
                    status: 1,
                    data: cv.Skill
                })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    status: 0,
                    err
                })
            }
        })
}

exports.hideSkills = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB ERROR Occurred",
                    err
                })
            }
            if (cv) {
                hidden = cv.Hidden;
                hidden.HideSkill = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Skills hide successfully";
                        else msg = "Skills show successfully";
                        return res.status(200).json({
                            msg,
                            status: 1,
                            cv_id: req.body._id,
                            hidden: hidden.HideSkill
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found",
                    status: 0,
                })
            }
        })
}