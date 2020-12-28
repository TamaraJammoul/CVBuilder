const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signUp = (req, res) => {

    User.findOne({
        Email: req.body.Email
    }).exec((error, user) => {
        if (user) {
            return res.status(400).json({
                msg: "User already registered"
            })
        }
        const { FirstName, LastName, Email, Password } = req.body;

        let Hash_Password = bcrypt.hashSync(Password, 10);

        const _user = new User({
            FirstName, LastName, Email, Password: Hash_Password
        })

        console.log(_user);
        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    msg: "Something went wrong",
                    error: error
                });
            }
            const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            if (data) {
                return res.status(200).json({
                    msg: "User has registered",
                    data: data,
                    token: token
                });
            }
        });
    });
}

exports.logIn = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    msg: "Error occured",
                    error: error
                });
            }
            if (user) {
                console.log(req.body)
                let auth = bcrypt.compareSync(req.body.Password, user.Password);
                if (auth) {
                    const token = jwt.sign(
                        { _id: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: "1h" }
                    );
                    const { _id, FirstName, LastName, Email } = user;
                    res.status(200).json({
                        token: token,
                        user: {
                            _id, FirstName, LastName, Email
                        }
                    });
                }
                else {
                    res.status(400).json({
                        msg: "Wrong Password"
                    });
                }
            }
            else {
                return res.status(400).json({
                    msg: "Something went Wrong"
                });
            }
        });
}

exports.requireSignIn = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}