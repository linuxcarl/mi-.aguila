import express from 'express';
import { config } from '../config';
import helmet from 'helmet';
import cors from 'cors';

import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json';

import {
  errorHandler,
  logErrors,
  wrapErrors,
} from '../utils/middleware/errorHandlers';
import { notFoundHandler } from '../utils/middleware/notFoundHandler';
import trips = require('./components/trips/network');
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// Routing
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/trips', trips);

//middlewares by errors
app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.api.port, () => {
  console.log(`Escuchando en el puerto ${config.api.port}`);
});
