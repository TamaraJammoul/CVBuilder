const CV = require('../../models/CV');
const PersonalInformation = require('../../models/sections/PersonalInformation');

exports.addPersonalInformation = (req, res) => {
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
                    Phone, Email, LinkedIn, City,
                    Married, Birth, Nationality, Order
                } = req.body;
                const personalInformation = new PersonalInformation({
                    Phone, Email, LinkedIn, City,
                    Married, Birth, Nationality, Order
                });
                personalInformation.save()
                    .then((savedInfo) => {

                        CV.updateOne({ _id: cv._id }, {
                            $set: {
                                PersonalInformation: savedInfo._id
                            }
                        }).then(() => {
                            return res.status(200).json({
                                msg: "PersonalInformation added successfuly",
                                data: savedInfo._id
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
