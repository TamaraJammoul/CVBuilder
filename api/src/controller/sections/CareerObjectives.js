const CV = require('../../models/CV');
const CareerObjectives = require('../../models/sections/CareerObjectives');

exports.updateCareer = (req, res) => {
    const { _id, Text, Order } = req.body;
    CareerObjectives.findById(_id).exec((error, careerObjectives) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong",
                error: error
            })
        }
        if (careerObjectives) {
            CareerObjectives.updateOne({ _id: _id }, {
                $set: {
                    Text,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "CareerObjectives updated successfully",
                    data: {
                        _id,
                        Text,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No CareerObjectives found",
            })
        }
    })
}