const { Joi } = require("express-validation");

const credentialsRegisterSchema = {
  body: Joi.object({
    name: Joi.string()
      .max(20)
      .messages({ message: "A Name is Required" })
      .required(),
    username: Joi.string()
      .max(20)
      .messages({ message: "A Username is Required" })
      .required(),
    password: Joi.string()
      .max(20)
      .messages({ message: "A Password is Required" })
      .required(),
  }),
};

module.exports = { credentialsRegisterSchema };
