const registerValidation = require('./Joi/registerValidation');
const loginValidation = require('./Joi/loginValidation');
const validatior = undefined || 'Joi';

const validateRegistration = (user) => {
    if(validatior === 'Joi') return registerValidation(user);
}

const validateLogin = (user) => {
    if(validatior === 'Joi') return loginValidation(user);
}
const validateUserUpdate = user => {
    if (validator === "Joi") return userUpdateValidation(user);
  };
exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
exports.validateUserUpdate = validateUserUpdate;