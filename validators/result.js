const { validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            success: false,
            errors: errors.array()
        });
    }

    next(); // sto users.js molis ektelestei h checkErrors, to next() afhnei na ektelestei h epomenh function
}

module.exports = checkErrors;

