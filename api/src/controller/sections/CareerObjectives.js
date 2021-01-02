const CV = require('../../models/CV');
const CareerObjectives = require('../../models/sections/CareerObjectives');

exports.updateCareer = (req, res) => {
    const { _id, Text } = req.body;
    CareerObjectives.findById(_id).exec((error, careerObjectives) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (careerObjectives) {
            CareerObjectives.updateOne({ _id: _id }, {
                $set: {
                    Text,
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Career Objectives updated successfully",
                    data: {
                        _id,
                        Text,
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Career Objectives found",
            })
        }
    })
}

exports.getCareer = (req, res) => {
    CareerObjectives.findById(req.body._id)
        .exec((err, career) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB error occured",
                    err
                })
            }
            if (career) {
                return res.status(200).json({
                    msg: "Career Obkectives returned successfully",
                    career
                })
            }
            else {
                return res.status(200).json({
                    msg: "No Career Objectives Found",
                })
            }
        })
}