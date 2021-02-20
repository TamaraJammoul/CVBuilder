const CV = require('../../models/CV');
const Certificate = require('../../models/sections/Certificate');
const func = require("../func");

exports.addCertificate = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                var { Name, NameAr, Description, DescriptionAr, Year, Order } = req.body;
                NameAr = func(NameAr);
                DescriptionAr = func(DescriptionAr);
                let certificate = new Certificate({
                    Name, NameAr, Description, DescriptionAr, Year, Order
                });
                certificate.save().then((cert) => {
                    let tmpCertificate = cv.Certificates;
                    tmpCertificate.push(cert._id);
                    cv.updateOne({ Certificates: tmpCertificate })
                        .then(() => {
                            return res.status(200).json({
                                msg: "Certificates added successfuly",
                                status: 1,
                                data: { _id: cert._id, Name, NameAr, Description, DescriptionAr, Year, Order }
                            })
                        })
                })
            }
            else {
                return res.status(200).json({
                    msg: "No CV found",
                    status: 0,
                })
            }
        })
}

exports.deleteCertificate = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpCertificate = cv.Certificates;
                let index = -1;
                for (let i = 0; i < tmpCertificate.length; i++) {
                    if (tmpCertificate[i].toString() === req.body.certificate_id) {
                        index = i;
                        console.log(i);
                        break;
                    }
                }
                if (index > -1) {
                    tmpCertificate.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Certificates: tmpCertificate } })
                    .then(() => {
                        Certificate.findById(req.body.certificate_id).then((ce) => {
                            Certificate.deleteOne({ _id: req.body.certificate_id }).then(() => {
                                Certificate.find({ _id: { $in: tmpCertificate } }).then((cerArray) => {
                                    Promise.all(cerArray.map(item => {
                                        return anAsyncFunction3(item, ce.Order);
                                    })).then(() => {
                                        return res.status(200).json({
                                            msg: "certificate deleted",
                                            status: 1,
                                            data: tmpCertificate
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateCertificate = (req, res) => {
    var { _id, Name, NameAr, Description, DescriptionAr, Year, Order } = req.body;
    NameAr = func(NameAr);
    DescriptionAr = func(DescriptionAr);
    Certificate.findById(_id).exec((error, certificate) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (certificate) {
            Certificate.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    NameAr,
                    Description,
                    DescriptionAr,
                    Year,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Certificate updated successfully",
                        status: 1,
                        data: {
                            _id,
                            Name,
                            NameAr,
                            Description,
                            DescriptionAr,
                            Year,
                            Order
                        }
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Certificate found",
                status: 0,
            })
        }
    })
}

exports.getCertificates = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Certificate.find({ _id: { $in: cv.Certificates } })
                    .exec((err, cert) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (cert) {
                            return res.status(200).json({
                                msg: "Certificates returned successfully",
                                status: 1,
                                data: cert
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                status: 0,
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    status: 0,
                    err
                })
            }
        })
}

exports.hideCertificates = (req, res) => {
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
                hidden.HideCertificates = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Certificates hide successfully";
                        else msg = "Certificates show successfully";
                        return res.status(200).json({
                            msg,
                            status: 1,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideCertificates
                            }
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found",
                    status: 0,
                })
            }
        })
}

exports.copyCertificate = (req, res) => {
    const _id = req.body.cvID;
    const certificate_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                certificates = cv.Certificates;
                Certificate.findById(certificate_id).exec((err, certificate) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (certificate) {
                        const newCertificate = new Certificate({
                            Name: certificate.Name, NameAr: certificate.NameAr, Description: certificate.Description, DescriptionAr: certificate.DescriptionAr, Year: certificate.Year, Order: certificates.length + 1
                        })
                        certificates.push(newCertificate);
                        console.log(certificates);
                        newCertificate.save().then((newcertificate) => {
                            CV.updateOne({ _id: _id }, { $set: { Certificates: certificates } }).then(() => {
                                return res.status(200).json({
                                    msg: "Certificate Copied successfully",
                                    status: 1,
                                    data: {
                                        _id: newcertificate._id,
                                        Name: newcertificate.Name,
                                        NameAr: newcertificate.NameAr,
                                        Description: newcertificate.Description,
                                        DescriptionAr: newcertificate.DescriptionAr,
                                        Year: newcertificate.Year,
                                        Order: newcertificate.Order
                                    }
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Certificate not found",
                            status: 0,
                        })
                    }
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV not found",
                    status: 0,
                })
            }
        })
}

exports.orderCertifcates = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            certificates = cv.Certificates;

            if (oldID >= newID) {
                Promise.all(certificates.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Certificate.find({ _id: { $in: cv.Certificates } }).sort({ Order: 1 }).then((cert) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: cert
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(certificates.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Certificate.find({ _id: { $in: cv.Certificates } }).sort({ Order: 1 }).then((cert) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: cert
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(200).json({
                status: 0,
                msg: "NO CV Found"
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    Certificate.findById(item).exec().then(async (cert) => {
        if (cert.Order === oldID) {
            await Certificate.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (cert.Order >= newID && cert.Order < oldID) {
            var n = cert.Order + 1;
            await Certificate.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Certificate.findById(item).exec().then(async (cert) => {
        if (cert.Order === oldID) {
            await Certificate.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (cert.Order > oldID && cert.Order <= newID) {
            var n = cert.Order - 1;
            await Certificate.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await Certificate.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}