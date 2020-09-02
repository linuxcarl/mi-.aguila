import express from 'express';
import * as Controller from './index';
import * as responses from '../../../utils/network/responses';

import {
  filterSchema,
  filterSchemaTotales,
} from '../../../utils/schemas/trips';
import { validationHandler } from '../../../utils/middleware/validationHandler';

const router = express.Router();

router.get('/', validationHandler(filterSchema, 'query'), getAll);
router.get('/total', validationHandler(filterSchemaTotales, 'query'), getTotal);

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
module.exports = router;
