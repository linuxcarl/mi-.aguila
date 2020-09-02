import Joi, { NumberSchema, StringSchema } from '@hapi/joi';
const ObjectId = require('joi-objectid');
const JoiObjectId = ObjectId(Joi);

const idSchema: string = JoiObjectId();
const limit: NumberSchema = Joi.number();
const page: NumberSchema = Joi.number();
const city: StringSchema = Joi.string().min(2).max(50);
const country: StringSchema = city;

export const filterSchema = {
  _id: idSchema,
  page,
  limit,
  city,
  country,
};

export const filterSchemaTotales = {
  city,
  country,
};
