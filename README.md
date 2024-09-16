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

- [Jest](https://jestjs.io/) for unit testing
- [Express](https://expressjs.com/) for HTTP server
- [DotEnv](https://www.npmjs.com/package/dotenv) for environment variables
- [Winston](https://www.npmjs.com/package/winston) for logging
- [TypeScript](https://www.typescriptlang.org/) for code compilation
- [Eslint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://www.npmjs.com/package/husky) for pre-commit hooks
- [Nodemon](https://nodemon.io/) for development server
- [TS-node](https://www.npmjs.com/package/ts-node) for TypeScript Node integration

## Examples

The `main.ts` file is the main application file where an example of how to use the project can be seen.

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
    A[src] --> B[app];
    A --> C[test];

    B --> D[app.schema.ts];
    B --> E[app.env.ts];
    B --> F[app.logger.ts];
    B --> G[assets];
    B --> H[infrastructure];
    B --> I[services];
    B --> J[scripts];
    B --> K[templates];
    B --> L[main.ts];

    D --> M[Defines and validates environment variable schema];
    E --> N[Validates environment variables using app.schema.ts];
    F --> O[Handles logs, called from main.ts];
    G --> P[Publicly exposed elements like images and audio];
    H --> Q[Connects to databases, S3, and similar elements];
    I --> R[Connects to external APIs via HTTP];
    J --> S[Used for running ORM and similar tasks];
    K --> T[Templates for Handlebars, emails, etc.];

    L --> U[Example of how these components interact];
    C --> V[*.spec.ts files are found in the same directory structure as in src/app];
    V --> W[main.spec.ts];
```
