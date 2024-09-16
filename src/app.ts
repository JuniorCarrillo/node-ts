import express from 'express';
import env from './app.env';

const app = express();

const rootHandler = (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
};

app.get('/', rootHandler);

const server = app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});

export { rootHandler, server };
