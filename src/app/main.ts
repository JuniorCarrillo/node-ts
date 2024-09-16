import express from 'express';
import env from './app.env';

const main = express();

const rootHandler = (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
};

main.get('/', rootHandler);

const server = main.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});

export { rootHandler, server };
