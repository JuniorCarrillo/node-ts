import express from "express";
import * as swaggerUI from "swagger-ui-express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "src/app/routes";
import swagger from "./app.swagger";
import logger from "./app.logger";
import env from "./app.env";

const main = express();
main.use(fileUpload({ createParentPath: true }));
main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json());
main.use(morgan("dev"));
main.use(cors());
main.use(cookieParser());
main.use(express.json());

main.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

main.use("/docs", swaggerUI.serve, swaggerUI.setup(swagger));
main.use("/api", routes);

main.listen(env.port, () => {
  logger.info(`Server is running on port ${env.port}`);
});
