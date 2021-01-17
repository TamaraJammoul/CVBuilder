const User = require('../models/User');
const Admin = require('../models/Admin');
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

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    msg: "Something went wrong, can't get any thing from DB",
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
                    msg: "Something went Wrong, can't get any thing from DB"
                });
            }
        });
}

exports.logInAdmin = (req, res) => {
    Admin.findOne({ Email: req.body.Email })
        .exec((err, admin) => {
            if (err) {
                return res.status(400).json({
                    msg: "error in connecting to MONGODB",
                    err
                })
            }
            if (admin) {
                let password = req.body.Password;
                let auth = bcrypt.compareSync(password, admin.Password);
                if (auth) {
                    const token = jwt.sign(
                        { _id: admin._id },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' })
                    return res.status(200).json({
                        	success : 1,
		token
                    })
                }
                else {
                    return res.status(200).json({
                        msg: "Wroge Password"
                    })
                }
            }
            else {
                res.status(200).json({
                    msg: "NO Admin Found"
                })
            }
        })
}

exports.addAdmin = (req, res) => {
    const { Email, Password } = req.body;
    const pass = bcrypt.hashSync(Password, 10);
    const admin = new Admin({
        Email,
        pass
    });
    admin.save().then(() => {
        return res.status(200).json({
            Email,
            Password: pass
        })
    })
}

exports.changePasswordAdmin = (req, res) => {
    const newPass = req.body.Password;
    const Email = req.body.Email;
    const pass = bcrypt.hashSync(newPass, 10);
    Admin.findOneAndUpdate({ Email: Email }, { Password: pass }, { new: true, useFindAndModify: false }).then((newAdmin) => {
        return res.status(200).json({
            newAdmin
        })
    })
}

exports.changePasswordUser = (req, res) => {
    const newPass = req.body.Password;
    const Email = req.body.Email;
    const pass = bcrypt.hashSync(newPass, 10);
    User.findOneAndUpdate({ Email: Email }, { Password: pass }, { new: true, useFindAndModify: false }).then((newUser) => {
        return res.status(200).json({
            newUser
        })
    })
}

exports.requireSignIn = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}