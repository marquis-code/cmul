const Joi = require("@hapi/joi");

exports.nimasitesAuthValidation = Joi.object({
    username: Joi.string().trim().min(3).max(64).required(),
    
    email: Joi.string()
    .email()
    .trim()
    .required(),
       
    matric: Joi.number()
    .required(),
  
    college: Joi.string()
    .required()
    .trim(),
    
    password: Joi.string()
    .min(8)
    .max(250)
    .required()
  })
  
  