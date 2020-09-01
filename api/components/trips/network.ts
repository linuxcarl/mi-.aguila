import express from 'express';
import * as Controller from './index';
import * as responses from '../../../utils/network/responses';

const router = express.Router();

router.get('/', getAll);

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
module.exports = router;
