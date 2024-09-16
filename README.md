# NodeTS

## Description

Este es un proyecto de esqueleto que permite utilizarlo para proyectos que requieran el uso de Node con TypeScript. La solucion esta inicialmente pensada para uso general, pero provee de capacidades de unit testing, http y manejo de variables de entorno.

### Libreries

Este proyecto contiene principalmente las siguientes librerias y elementos.

## Installation

Step-by-step instructions on how to install the project. For example:

## Usage

Examples of how to use the project after installation. For example:

``` bash
npm start
```

This command will start the project with the default configuration:

- [https://jestjs.io/](Jest) for unit testing
- [https://expressjs.com/](Express) for HTTP server
- [https://www.npmjs.com/package/dotenv](Dotenv) for environment variables
- [https://www.npmjs.com/package/winston](Winston) for logging
- [https://www.typescriptlang.org/](TypeScript) for code compilation
- [https://eslint.org/](Eslint) for code linting
- [https://prettier.io/](Prettier) for code formatting
- [https://www.npmjs.com/package/husky](Husky) for pre-commit hooks
- [https://nodemon.io/](Nodemon) for development server
- [https://www.npmjs.com/package/ts-node](Ts-node) for TypeScript Node integration

## Examples

El main.ts es el archivo principal de la aplicacion, en el se puede ver un ejemplo de como se puede utilizar el proyecto.

``` typescript
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

```

## Contribution

Guide to contribute to the project. For example:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

Information about the project's license. For example:

This project is licensed under the MIT License. See the LICENSE file for more details.

## Project Diagram

Below is a flow diagram representing the main elements of the project:

## Project Diagram

Below is a flow diagram representing the main elements of the project:
