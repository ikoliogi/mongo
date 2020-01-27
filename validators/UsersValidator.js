const { check } = require('express-validator');
const checkErrors = require('./result');
// { check } giati to express-validator kanei export ena module kai emeis xreaizomaste to check
//alliws 8a mporousame const exv = require('express-validator'); kai exv.check("email").isEmail();
/*Validators */
//https://github.com/validatorjs/validator.js#validators

const create = [
    check("email").isEmail(),
    check('password').isLength({ min: 3 }),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    checkErrors
];

const getOne = [
    check("userId").isMongoId().withMessage("UserId is not valid, provide a valid MongoId"),
    checkErrors
];

module.exports = {
    create,
    getOne
};
