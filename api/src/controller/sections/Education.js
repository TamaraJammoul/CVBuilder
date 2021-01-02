const CV = require('../../models/CV');
const Education = require('../../models/sections/Education');

exports.addEducation = (req, res) => {
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
                    UniversityName, Faculty, Field, YearStart,
                    YearEnd, DegreeFrom5, Grade,
                    Degree, Order
                } = req.body;

                const DegreeFrom10 = DegreeFrom5 * 2;
                const DegreeFrom100 = DegreeFrom5 * 20;

                let education = new Education({
                    UniversityName, Faculty, Field, YearStart,
                    YearEnd, Grade, DegreeFrom5, DegreeFrom10,
                    DegreeFrom100, Degree, Order
                });
                education.save()
                    .then((edu) => {
                        let tmpEducations = cv.Educations;
                        tmpEducations.push(edu._id);
                        cv.updateOne({ Educations: tmpEducations })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Educations added successfuly",
                                    data: edu
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

exports.deleteEducation = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpEducations = cv.Educations;
                let index = -1;
                for (let i = 0; i < tmpEducations.length; i++) {
                    if (tmpEducations[i].toString() === req.body.education_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpEducations.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Educations: tmpEducations } })
                    .then(() => {
                        Education.deleteOne({ _id: req.body.education_id }).then(() => {
                            return res.status(200).json({
                                msg: "education deleted",
                                data: tmpEducations
                            })
                        })
                    })
            }
        })
}

exports.updateEducation = (req, res) => {
    const { _id, UniversityName, Faculty, Field, YearStart, YearEnd, Grade, DegreeFrom5, Degree, Order } = req.body;
    Education.findById(_id).exec((error, education) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        const DegreeFrom10 = DegreeFrom5 * 2;
        const DegreeFrom100 = DegreeFrom5 * 20;
        if (education) {
            Education.updateOne({ _id: _id }, {
                $set: {
                    UniversityName,
                    Faculty,
                    Field,
                    YearStart,
                    YearEnd,
                    Grade,
                    DegreeFrom5,
                    DegreeFrom10,
                    DegreeFrom100,
                    Degree,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Education updated successfully",
                    data: {
                        _id,
                        UniversityName,
                        Faculty,
                        Field,
                        YearStart,
                        YearEnd,
                        Grade,
                        DegreeFrom5,
                        DegreeFrom10,
                        DegreeFrom100,
                        Degree,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Education found",
            })
        }
    })
}