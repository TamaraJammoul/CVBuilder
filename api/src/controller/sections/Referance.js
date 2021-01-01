const CV = require('../../models/CV');
const Referance = require('../../models/sections/Referance');

exports.addReferance = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                const { Name, Order } = req.body;
                let referance = new Referance({ Name, Order });
                referance.save()
                    .then((ref) => {
                        let tmpReferance = cv.Referances;
                        tmpReferance.push(ref._id);
                        cv.updateOne({ Referances: tmpReferance })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Referance added successfuly",
                                    data: ref
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

exports.deleteReferance = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpReferance = cv.Referances;
                let index = -1;
                for (let i = 0; i < tmpReferance.length; i++) {
                    if (tmpReferance[i].toString() === req.body.referance_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpReferance.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Referances: tmpReferance } })
                    .then(() => {
                        Referance.deleteOne({ _id: req.body.referance_id }).then(() => {
                            return res.status(200).json({
                                msg: "Referance deleted",
                                data: tmpReferance
                            })
                        })
                    })
            }
        })
}

exports.updateReferance = (req, res) => {
    const { _id, Name, Order } = req.body;
    Referance.findById(_id).exec((error, referance) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (referance) {
            Referance.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Referance updated successfully",
                    data: {
                        _id,
                        Name,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Referance found",
            })
        }
    })
}