const CV = require('../../models/CV');
const OtherTraining = require('../../models/sections/OtherTraining');

exports.addOtherTraining = (req, res) => {
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
                    Name, Order
                } = req.body;
                let otherTraining = new OtherTraining({
                    Name, Order
                });
                otherTraining.save()
                    .then((otr) => {
                        let tmpOtherTrainings = cv.OtherTrainings;
                        tmpOtherTrainings.push(otr._id);
                        cv.updateOne({ OtherTrainings: tmpOtherTrainings })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "OtherTraining added successfuly",
                                    data: otr
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

exports.deleteOtherTraining = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                let tmpOtherTrainings = cv.OtherTrainings;
                let index = -1;
                for (let i = 0; i < tmpOtherTrainings.length; i++) {
                    if (tmpOtherTrainings[i].toString() === req.body.otherTraining_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpOtherTrainings.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { OtherTrainings: tmpOtherTrainings } })
                    .then(() => {
                        OtherTraining.deleteOne({ _id: req.body.otherTraining_id }).then(() => {
                            return res.status(200).json({
                                msg: "otherTraining deleted",
                                data: tmpOtherTrainings
                            })
                        })
                    })
            }
        })
}