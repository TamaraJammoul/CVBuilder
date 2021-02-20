const User = require('../models/User');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const func = require("./func");
const nodemailer = require("nodemailer");

exports.signUp = (req, res) => {

    User.findOne({
        Email: req.body.Email
    }).exec((error, user) => {
        if (user) {
            return res.status(400).json({
                msg: "User already registered"
            })
        }
        var { FirstName, LastName, FirstNameAr, LastNameAr, Email, Password } = req.body;
        FirstNameAr = func(FirstNameAr);
        LastNameAr = func(LastNameAr);
        let Hash_Password = bcrypt.hashSync(Password, 10);

        const _user = new User({
            FirstName, LastName, FirstNameAr, LastNameAr, Email, Password: Hash_Password
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
                    status: 1,
                    msg: "User has registered",
                    data,
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
                    const { _id, FirstName, LastName, FirstNameAr, LastNameAr, Email } = user;
                    res.status(200).json({
                        token: token,
                        status: 1,
                        data: {
                            _id,
                            FirstName,
                            LastName,
                            FirstNameAr,
                            LastNameAr,
                            Email
                        }
                    });
                }
                else {
                    return res.status(200).json({
                        status: 0,
                        msg: "Wrong Password"
                    });
                }
            }
            else {
                return res.status(200).json({
                    status: 0,
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
                        status: 1,
                        token
                    })
                }
                else {
                    return res.status(200).json({
                        msg: "Wroge Password",
                        status: 0,
                    })
                }
            }
            else {
                return res.status(200).json({
                    msg: "NO Admin Found",
                    status: 0
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
            status: 1,
            data: newAdmin
        })
    })
}

exports.changePasswordUser = (req, res) => {
    const newPass = req.body.Password;
    const Email = req.body.Email;
    const pass = bcrypt.hashSync(newPass, 10);
    User.findOneAndUpdate({ Email: Email }, { Password: pass }, { new: true, useFindAndModify: false }).then((newUser) => {
        return res.status(200).json({
            data: newUser,
            status: 1
        })
    })
}

exports.ResetPassword = (req, res) => {
    User.findOne({ Email: req.body.Email }).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                msg: "Error connection DB"
            })
        }
        if (user) {
            const Hash_Password = bcrypt.hashSync(req.body.Password, 10);
            User.updateOne({ "_id": user._id }, { $set: { Password: Hash_Password } }).then(() => {
                return res.status(200).json({
                    msg: "Password Changed Successfully",
                    status: 1,
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "NO USER FOUND",
                status: 0
            })
        }
    })
}

exports.requireSignIn = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}

exports.contactUs = (req, res) => {
    const output = `
          <p>You have requested to change your password , click on the link to complete the information</p>
          <p>Your Email : ${req.body.Email}</p>
          <p>Link : ${req.body.Link}</p>
      `;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        tls: true,
        auth: {
            user: "CVBuilder2021@gmail.com",
            pass: "123@123@",
        },
    });

    let mailOptions = {
        from: `CVBuilder2021@gmail.com`, // sender address
        to: `${req.body.Email}`, // list of receivers
        subject: "E-mail message", // Subject line
        html: output, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        return res.status(200).json({
            status: 1,
            msg: "Email has been sent"
        });
    });
}