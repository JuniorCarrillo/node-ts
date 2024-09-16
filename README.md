# NodeTS

## Description

This is a skeleton project intended for projects requiring the use of Node with TypeScript. The solution is initially designed for general use but provides capabilities for unit testing, HTTP, and environment variable management.

### Libraries

This project primarily includes the following libraries and elements.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**  
   Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/JuniorCarrillo/nodets.git
   cd nodets
    ```
   
2. **Install the dependencies**
   Install the project dependencies using npm:

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `src/app` directory and define your environment variables as needed. Here's an example:

   ```bash
    PORT=3000
    NODE_ENV=development
   ```

4. **Start the project**
   Start the project using the following command:

   ```bash
   npm start
   ```

    The server should now be running at `http://localhost:3000`.   
 
5. **Run the tests**
   To run the unit tests, use:

   ```bash
   npm test
   ```

   This command will run all the tests in the `src/test` directory.

6. **Build the project**
    To build the project, use:
    
    ```bash
    npm run build
    ```
    
    This command will compile the TypeScript code into JavaScript and place it in the `dist` directory.

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

This project is licensed under the BSD 3-Clause License. See the LICENSE file for more details.

## Project Diagram

Below is a flow diagram representing the main elements of the project:

``` mermaid
graph TD;
    A[Root] --> B[Dockerfile];
    A --> C[LICENSE];
    A --> D[package.json];
    A --> E[package-lock.json];
    A --> F[README.md];
    A --> G[src];
    A --> H[tsconfig.json];
    A --> I[tslint.json];

    G --> J[app];
    G --> K[index.ts];
    G --> L[test];

    J --> M[app.env.ts];
    J --> N[app.logger.ts];
    J --> O[app.schema.ts];
    J --> P[assets];
    J --> Q[index.ts];
    J --> R[infrastructure];
    J --> S[main.ts];
    J --> T[scripts];
    J --> U[templates];

    L --> V[main.spec.ts];
```
