const Joi = require('joi');
const { HttpCode } = require('../helpers/constants');

const schemaCreateCotact = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.string().pattern(new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .optional(),
});

const schemaUpdateCotact = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).optional(),
  phone: Joi.string().pattern(new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')).optional(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .optional(),
});

const validate = (shema, body, next) => {
  const { error } = shema.validate(body);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: HttpCode.BAD_REQUEST,
      code: HttpCode.BAD_REQUEST,
      message: `Field ${message.replace(/"/g, '')}`,
      data: 'Bad request',
    });
  }
  next();
};

module.exports.validateCreateCotact = (req, res, next) => {
  return validate(schemaCreateCotact, req.body, next);
};

module.exports.validateUpdateCotact = (req, res, next) => {
  return validate(schemaUpdateCotact, req.body, next);
};
//   .with("username", "birth_year")
//   .xor("password", "access_token")
//   .with("password", "repeat_password");

// schema.validate({ username: "abc", birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//   const value = await schema.validateAsync({
//     username: "abc",
//     birth_year: 1994,
//   });
// } catch (err) {}
