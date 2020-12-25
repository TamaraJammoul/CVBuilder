const CV = require('../../models/CV');
const Referance = require('../../models/sections/Referance');

exports.addRreferance = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong",
                    error: error
                })
            }
            if (cv) {
                const { Name, Whatsapp, Order } = req.body;
                const referance = new Referance({
                    Name, Whatsapp, Order
                });
                referance.save()
                    .then((ref) => {
                        CV.updateOne({ _id: cv._id }, {
                            $set: {
                                Referance: ref._id
                            }
                        }).then(() => {
                            return res.status(200).json({
                                msg: "Referance added successfuly",
                                data: ref._id
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