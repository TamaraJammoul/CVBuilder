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
                    Name, NameAr, Order
                } = req.body;
                let membership = new Memberships({
                    Name, NameAr, Order
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
                return res.status(0).json({
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
                        Memberships.findById(req.body.membership_id).then((mem) => {
                            Memberships.deleteOne({ _id: req.body.membership_id }).then(() => {
                                Memberships.find({ _id: { $in: tmpMemberships } }).then((memArray) => {
                                    Promise.all(memArray.map(item => {
                                        return anAsyncFunction3(item, mem.Order);
                                    })).then(() => {
                                        return res.status(200).json({
                                            msg: "membership deleted",
                                            data: tmpMemberships
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateMembership = (req, res) => {
    const { _id, Name, NameAr, Order } = req.body;
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
                    NameAr,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Membership updated successfully",
                        data: {
                            _id,
                            Name,
                            NameAr,
                            Order
                        }
                    })
                })
            })
        }
        else {
            return res.status(0).json({
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
                            return res.status(0).json({
                                msg: "No CV Found",
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(0).json({
                    msg: "No CV Found",
                    err
                })
            }
        })
}

exports.hideMemberships = (req, res) => {
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
                hidden.HideMemberships = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Memberships hide successfully";
                        else msg = "Memberships show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideMemberships
                            }
                        })
                    })
                })
            }
            else {
                return res.status(0).json({
                    msg: "CV Not Found"
                })
            }
        })
}

exports.copyMembership = (req, res) => {
    const _id = req.body.cvID;
    const membership_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                memberships = cv.Memberships;
                Memberships.findById(membership_id).exec((err, membership) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (membership) {
                        const newMembership = new Memberships({
                            Name: membership.Name,
                            NameAr: membership.NameAr,
                            Order: memberships.length + 1
                        })
                        memberships.push(newMembership);
                        newMembership.save().then((newmembership) => {
                            CV.updateOne({ _id: _id }, { $set: { Memberships: memberships } }).then(() => {
                                return res.status(200).json({
                                    msg: "Membership Copied successfully",
                                    data: newmembership
                                })
                            })
                        })
                    }
                    else {
                        return res.status(0).json({
                            msg: "Membership not found"
                        })
                    }
                })
            }
            else {
                return res.status(0).json({
                    msg: "CV not found"
                })
            }
        })
}

exports.orderMemberships = (req, res) => {   ////  cv_id, oldOrder,newOrder
    CV.findById(req.body._id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Error in connection to MonogoDB",
                err
            })
        }
        if (cv) {
            const oldID = req.body.oldID;
            const newID = req.body.newID;
            memberships = cv.Memberships;

            if (oldID >= newID) {
                Promise.all(memberships.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Memberships.find({ _id: { $in: cv.Memberships } }).sort({ Order: 1 }).then((mem) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: mem
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(memberships.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Memberships.find({ _id: { $in: cv.Memberships } }).sort({ Order: 1 }).then((mem) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: mem
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(0).json({
                msg: "NO CV Found"
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    Memberships.findById(item).exec().then(async (mem) => {
        if (mem.Order === oldID) {
            await Memberships.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (mem.Order >= newID && mem.Order < oldID) {
            var n = mem.Order + 1;
            await Memberships.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Memberships.findById(item).exec().then(async (mem) => {
        if (mem.Order === oldID) {
            await Memberships.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (mem.Order > oldID && mem.Order <= newID) {
            var n = mem.Order - 1;
            await Memberships.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await Memberships.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}