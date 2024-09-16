import * as dotenv from "dotenv";
import appSchema from "./app.schema";

dotenv.config();

const { error, value: env } = appSchema.validate(process.env, {
  abortEarly: false,
});

if (error) {
  console.error("Config validation error(s):");
  error.details.forEach((detail) => {
    console.error(`- ${detail.message}`);
  });
  throw new Error("Environment variables validation failed.");
}

export default {
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
  databaseUrl: env.DATABASE_URL,
  apiKey: env.API_KEY,
};
