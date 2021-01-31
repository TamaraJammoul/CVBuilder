const CV = require('../../models/CV');
const PersonalInformation = require('../../models/sections/PersonalInformation');

exports.updatePersonalInformation = (req, res) => {
    const { _id, FirstName, FirstNameAr, LastName, LastNameAr, Phone, Email, LinkedIn, City, CityAr, Country, CountryAr, MaritalStatus, MaritalStatusAr, Birth, Nationality, NationalityAr, Image } = req.body;
    PersonalInformation.findById(_id).exec((error, personalInformation) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (personalInformation) {
            PersonalInformation.updateOne({ _id: _id }, {
                $set: {
                    FirstName,
                    FirstNameAr,
                    LastName,
                    LastNameAr,
                    Phone,
                    Email,
                    LinkedIn,
                    City,
                    CityAr,
                    Country,
                    CountryAr,
                    MaritalStatus,
                    MaritalStatusAr,
                    Birth,
                    Nationality,
                    NationalityAr,
                    Image
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "PersonalInformation updated successfully",
                        data: {
                            _id,
                            FirstName,
                            FirstNameAr,
                            LastName,
                            LastNameAr,
                            Phone,
                            Email,
                            LinkedIn,
                            City,
                            CityAr,
                            Country,
                            CountryAr,
                            MaritalStatus,
                            MaritalStatusAr,
                            Birth,
                            Nationality,
                            NationalityAr,
                            Image
                        }
                    })
                })
            })
        }
        else {
            return res.status(0).json({
                msg: "No PersonalInformation found",
            })
        }
    })
}

exports.getPersonalInformation = (req, res) => {
    PersonalInformation.findById(req.body._id)
        .exec((err, perInfo) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (perInfo) {
                return res.status(200).json({
                    msg: "Personal Information returned successfuly",
                    data: perInfo
                })
            }
            else {
                return res.status(0).json({
                    msg: "No Personal Information Found",
                })
            }
        })
}