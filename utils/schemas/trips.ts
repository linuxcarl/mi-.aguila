import Joi, { NumberSchema, StringSchema } from '@hapi/joi';
import ObjectId from 'joi-objectid';
const JoiObjectId = ObjectId(Joi);

interface IFilter {
  _id?: string;
  page?: NumberSchema;
  limit?: NumberSchema;
  city?: StringSchema;
  country?: StringSchema;
}

const idSchema: string = JoiObjectId();
const limit: NumberSchema = Joi.number();
const page: NumberSchema = Joi.number();
const city: StringSchema = Joi.string().min(4).max(50);
const country: StringSchema = city;

export const filterSchema: IFilter = {
  _id: idSchema,
  page,
  limit,
  city,
  country,
};
