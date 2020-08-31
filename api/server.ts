import express from 'express';
import { config } from '../config';
import helmet from 'helmet';
import cors from 'cors';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.api.port, () => {
  console.log(`Escuchando en el puerto ${config.api.port}`);
});
