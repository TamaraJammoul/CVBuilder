const CV = require('../../models/CV');
const Reference = require('../../models/sections/Reference');

exports.addReference = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                const { Name, Number, Order } = req.body;
                let reference = new Reference({ Name, Number, Order });
                reference.save()
                    .then((ref) => {
                        let tmpReference = cv.References;
                        tmpReference.push(ref._id);
                        cv.updateOne({ References: tmpReference })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Reference added successfuly",
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

exports.deleteReference = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpReference = cv.References;
                let index = -1;
                for (let i = 0; i < tmpReference.length; i++) {
                    if (tmpReference[i].toString() === req.body.reference_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpReference.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { References: tmpReference } })
                    .then(() => {
                        Reference.deleteOne({ _id: req.body.reference_id }).then(() => {
                            return res.status(200).json({
                                msg: "Reference deleted",
                                data: tmpReference
                            })
                        })
                    })
            }
        })
}

exports.updateReference = (req, res) => {
    const { _id, Name, Number, Order } = req.body;
    Reference.findById(_id).exec((error, reference) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (reference) {
            Reference.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Number,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Reference updated successfully",
                    data: {
                        _id,
                        Name,
                        Number,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Reference found",
            })
        }
    })
}

exports.getReferences = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Reference.find({ _id: { $in: cv.References } })
                    .exec((err, ref) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (ref) {
                            return res.status(200).json({
                                msg: "References returned successfully",
                                data: ref
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    err
                })
            }
        })
}

exports.hideReferences = (req, res) => {
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
                hidden.HideReferences = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    var msg = "";
                    if (req.body.hide) msg = "References hide successfully";
                    else msg = "References show successfully";
                    return res.status(200).json({
                        msg,
                        data: {
                            cv_id: req.body._id,
                            hidden: hidden.HideReferences
                        }
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
}