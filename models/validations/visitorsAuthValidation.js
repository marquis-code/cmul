const Joi = require("@hapi/joi");

exports.visitorsAuthValidation = Joi.object({
  username: Joi.string().trim().min(3).max(64).required(),
  
  email: Joi.string()
  .email()
  .trim()
  .required(),
  
  password: Joi.string()
  .min(8)
  .max(250)
  .required()
});