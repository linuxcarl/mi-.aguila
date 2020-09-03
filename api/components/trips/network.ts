import express, { Router } from 'express';
const Controller = require('./index');
import * as responses from '../../../utils/network/responses';

import {
  idSchema,
  filterSchema,
  filterSchemaTotales,
  createTripSchema,
  updateTripSchema,
} from '../../../utils/schemas/trips';
import { validationHandler } from '../../../utils/middleware/validationHandler';

const router = express.Router();

router.get('/', validationHandler(filterSchema, 'query'), getAll);
router.get('/total', validationHandler(filterSchemaTotales, 'query'), getTotal);
router.post('/', validationHandler(createTripSchema), createTrip);
router.put(
  '/:_id',
  validationHandler({ _id: idSchema }, 'query'),
  validationHandler(updateTripSchema),
  updateTrip
);
async function getAll(req: any, res: any, next: any): Promise<void> {
  let { page = 1, limit = 20, city, country } = req.query;
  try {
    const trips: string[] = await Controller.findAll({
      page,
      limit,
      city,
      country,
    });
    responses.success(req, res, trips, 200);
  } catch (error) {
    next(error);
  }
}
async function getTotal(req: any, res: any, next: any): Promise<void> {
  let { city, country } = req.query;
  try {
    const trips: string[] = await Controller.findTotales({
      city,
      country,
    });
    responses.success(req, res, { trips: trips }, 200);
  } catch (error) {
    next(error);
  }
}
async function createTrip(req: any, res: any, next: any): Promise<void> {
  const { body: trips } = req;
  trips.createdAt = new Date();
  try {
    const createdTrip: string[] = await Controller.create(trips);
    responses.success(req, res, createdTrip, 201);
  } catch (error) {
    next(error);
  }
}

async function updateTrip(req: any, res: any, next: any): Promise<void> {
  const { body: trips } = req;
  const { _id } = req.params;
  trips.updatedAt = new Date();
  try {
    const createdTrip: string[] = await Controller.update(trips, _id);
    responses.success(req, res, createdTrip, 200);
  } catch (error) {
    next(error);
  }
}
module.exports = router;
