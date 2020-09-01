import express from 'express';
import * as Controller from './index';
import * as responses from '../../../utils/network/responses';
export const router = express.Router();

router.get('/', getAll);

async function getAll(req: any, res: any, next: any): Promise<void> {
  let { page = 1, limit = 20, city } = req.body;
  try {
    const trips: string[] = await Controller.getAll({ page, limit, city });
    responses.success(req, res, trips, 200);
  } catch (error) {
    next(error);
  }
}
