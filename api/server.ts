import express from 'express';
import { config } from '../config';
import helmet from 'helmet';
import cors from 'cors';

import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json';

import trips = require('./components/trips/network.ts');
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// Routing
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/trips', trips);

app.listen(config.api.port, () => {
  console.log(`Escuchando en el puerto ${config.api.port}`);
});
