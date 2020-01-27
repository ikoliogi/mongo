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
    check("email").isEmail(),
    check('password').isLength({ min: 3 }),
    checkErrors
];

module.exports = {
    register,
    login
};
