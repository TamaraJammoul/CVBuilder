const CV = require('../../models/CV');
const CareerObjectives = require('../../models/sections/CareerObjectives');

exports.updateCareer = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                const { Text, Order } = req.body;
                const careerObjective = new CareerObjectives({
                    Text, Order
                });
                careerObjective.save()
                    .then((savedCareer) => {

                        CV.updateOne({ _id: cv._id }, {
                            $set: {
                                CareerObjectives: savedCareer._id
                            }
                        }).then(() => {
                            return res.status(200).json({
                                msg: "CarrerObjectives added successfuly",
                                data: savedCareer._id
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