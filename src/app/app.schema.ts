import * as Joi from "joi";

const appSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().optional().default("db://localhost:5432"),
  API_KEY: Joi.string().optional().default("sfn-notification-hub"),
}).unknown();

export default appSchema;
