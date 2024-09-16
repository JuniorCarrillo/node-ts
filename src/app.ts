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
