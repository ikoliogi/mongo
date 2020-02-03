const { check } = require('express-validator');
const checkErrors = require('./result');

const register = [
    check("email").isEmail(),
    check('password').isLength({ min: 3 }),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    // check('passwordConfirm').equals(),
    checkErrors
];

const login  = [
    check("email").isEmail().withMessage("Invalid value at email field"),
    check('password').isLength({ min: 3 }).withMessage("Password must be more than 3 characters"),
    checkErrors
];

module.exports = {
    register,
    login
};
