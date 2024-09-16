import express from "express";
import env from "./app.env";
import logger from "./app.logger";

const main = express();

const rootHandler = (req: express.Request, res: express.Response) => {
  res.send("The sedulous hyena ate the antelope!");
};

main.get("/", rootHandler);

const server = main.listen(env.port, () => {
  logger.info(`Server is running on port ${env.port}`);
});

export { rootHandler, server };
