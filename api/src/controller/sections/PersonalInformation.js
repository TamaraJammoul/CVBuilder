const CV = require('../../models/CV');
const PersonalInformation = require('../../models/sections/PersonalInformation');

exports.updatePersonalInformation = (req, res) => {
    const { _id, Phone, Email, LinkedIn, City, Married, Birth, Nationality, Order } = req.body;
    PersonalInformation.findById(_id).exec((error, personalInformation) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong",
                error: error
            })
        }
        if (personalInformation) {
            PersonalInformation.updateOne({ _id: _id }, {
                $set: {
                    Phone,
                    Email,
                    LinkedIn,
                    City,
                    Married,
                    Birth,
                    Nationality,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "PersonalInformation updated successfully",
                    data: {
                        _id,
                        Phone,
                        Email,
                        LinkedIn,
                        City,
                        Married,
                        Birth,
                        Nationality,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No PersonalInformation found",
            })
        }
    })
}
