const CV = require('../../models/CV');
const Memberships = require('../../models/sections/Memberships');

exports.addMembership = (req, res) => {
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
                    Name, Order
                } = req.body;
                let membership = new Memberships({
                    Name, Order
                });
                membership.save()
                    .then((mem) => {
                        let tmpMemberships = cv.Memberships;
                        tmpMemberships.push(mem._id);
                        cv.updateOne({ Memberships: tmpMemberships })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Membership added successfuly",
                                    data: mem
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

exports.deleteMembership = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpMemberships = cv.Memberships;
                let index = -1;
                for (let i = 0; i < tmpMemberships.length; i++) {
                    if (tmpMemberships[i].toString() === req.body.membership_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpMemberships.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Memberships: tmpMemberships } })
                    .then(() => {
                        Memberships.deleteOne({ _id: req.body.membership_id }).then(() => {
                            return res.status(200).json({
                                msg: "membership deleted",
                                data: tmpMemberships
                            })
                        })
                    })
            }
        })
}

exports.updateMembership = (req, res) => {
    const { _id, Name, Order } = req.body;
    Memberships.findById(_id).exec((error, membership) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (membership) {
            Memberships.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Membership updated successfully",
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
                msg: "No Membership found",
            })
        }
    })
}

exports.getMemberships = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Memberships.find({ _id: { $in: cv.Memberships } })
                    .exec((err, mem) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (mem) {
                            return res.status(200).json({
                                msg: "Memberships returned successfully",
                                data: mem
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