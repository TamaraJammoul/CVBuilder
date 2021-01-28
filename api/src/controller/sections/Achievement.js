const CV = require('../../models/CV');
const Achievement = require('../../models/sections/Achievement');

exports.addAchievement = (req, res) => {
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
                let achievement = new Achievement({
                    Name, NameAr, Order
                });
                achievement.save()
                    .then((ach) => {
                        let tmpAchievements = cv.Achievements;
                        tmpAchievements.push(ach._id);
                        cv.updateOne({ Achievements: tmpAchievements })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Achievement added successfuly",
                                    data: ach
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
};

exports.deleteAchievement = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpAchievements = cv.Achievements;
                let index = -1;
                for (let i = 0; i < tmpAchievements.length; i++) {
                    if (tmpAchievements[i].toString() === req.body.achievement_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpAchievements.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Achievements: tmpAchievements } })
                    .then(() => {
                        Achievement.findById(req.body.achievement_id).then((ac) => {
                            Achievement.deleteOne({ _id: req.body.achievement_id }).then(() => {
                                Achievement.find({ _id: { $in: tmpAchievements } }).then((achArray) => {
                                    Promise.all(achArray.map(item => {
                                        return anAsyncFunction3(item, ac.Order);
                                    })).then(() => {
                                        return res.status(200).json({
                                            msg: "Achievement deleted",
                                            data: tmpAchievements
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        })
};

exports.updateAchievement = (req, res) => {
    const { _id, Name, NameAr, Order } = req.body;
    Achievement.findById(_id).exec((error, achievement) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (achievement) {
            Achievement.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    NameAr,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Achievement updated successfully",
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
            return res.status(200).json({
                msg: "No Achievement found",
            })
        }
    })
};

exports.getAchievements = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Achievement.find({ _id: { $in: cv.Achievements } })
                    .exec((err, ach) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (ach) {
                            return res.status(200).json({
                                msg: "Achievements returned successfully",
                                data: ach
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
};

exports.hideAchievements = (req, res) => {
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
                hidden.HideAchievements = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Achievements hide successfully";
                        else msg = "Achievements show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideAchievements
                            }
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
};

exports.copyAchievement = (req, res) => {
    const _id = req.body.cvID;
    const achievement_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                achievements = cv.Achievements;
                Achievement.findById(achievement_id).exec((err, achievement) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (achievement) {
                        const newAchievement = new Achievement({
                            Name: achievement.Name,
                            NameAr: achievement.NameAr,
                            Order: achievements.length + 1
                        })
                        achievements.push(newAchievement);
                        newAchievement.save().then((newachievement) => {
                            CV.updateOne({ _id: _id }, { $set: { Achievements: achievements } }).then(() => {
                                return res.status(200).json({
                                    msg: "Achievement Copied successfully",
                                    data: newachievement
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Achievement not found"
                        })
                    }
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV not found"
                })
            }
        })
};

exports.orderAchievements = (req, res) => {
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
            achievements = cv.Achievements;

            if (oldID >= newID) {
                Promise.all(achievements.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Achievement.find({ _id: { $in: cv.Achievements } }).sort({ Order: 1 }).then((ach) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: ach
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(achievements.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Achievement.find({ _id: { $in: cv.Achievements } }).sort({ Order: 1 }).then((ach) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: ach
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(200).json({
                msg: "NO CV Found"
            })
        }
    })
};

const anAsyncFunction = async (item, newID, oldID) => {
    Achievement.findById(item).exec().then(async (ach) => {
        if (ach.Order === oldID) {
            await Achievement.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (ach.Order >= newID && ach.Order < oldID) {
            var n = ach.Order + 1;
            await Achievement.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Achievement.findById(item).exec().then(async (ach) => {
        if (ach.Order === oldID) {
            await Achievement.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (ach.Order > oldID && ach.Order <= newID) {
            var n = ach.Order - 1;
            await Achievement.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await Achievement.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}