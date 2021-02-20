const { validationResult } = require('express-validator');

exports.validationRes = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    next();
}