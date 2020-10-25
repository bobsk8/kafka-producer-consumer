import * as Joi from '@hapi/joi';

export default () => ({
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  }
});

export const validationSchema = Joi.object({
  database: {
    host: Joi.string()
      .required(),
    port: Joi.string()
      .required(),
    name: Joi.string()
      .required(),
    user: Joi.number()
      .required(),
    password: Joi.string()
  }
});