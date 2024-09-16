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

``` typescript
import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

const rootHandler = (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
};

app.get('/', rootHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { rootHandler };

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
