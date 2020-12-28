const CV = require('../../models/CV');
const Certificate = require('../../models/sections/Certificate');

exports.addCertificate = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                const { Name, Description, Year, Order } = req.body;
                let certificate = new Certificate({
                    Name, Description, Year, Order
                });
                certificate.save().then((cert) => {
                    let tmpCertificate = cv.Certificates;
                    tmpCertificate.push(cert._id);
                    cv.updateOne({ Certificates: tmpCertificate })
                        .then(() => {
                            return res.status(200).json({
                                msg: "Certificates added successfuly",
                                data: cv.Certificates
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

exports.deleteCertificate = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
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
                        Certificate.deleteOne({ _id: req.body.certificate_id }).then(() => {
                            return res.status(200).json({
                                msg: "certificate deleted",
                                data: tmpCertificate
                            })
                        })
                    })
            }
        })
}

exports.updateCertificate = (req, res) => {
    const { _id, Name, Description, Year, Order } = req.body;

    Certificate.findById(_id).exec((error, certificate) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong",
                error: error
            })
        }
        if (certificate) {
            Certificate.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Description,
                    Year,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Certificate updated successfully",
                    data: {
                        _id,
                        Name,
                        Description,
                        Year,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Certificate found",
            })
        }
    })
}