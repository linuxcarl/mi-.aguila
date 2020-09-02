import Joi, { NumberSchema, StringSchema } from '@hapi/joi';
const ObjectId = require('joi-objectid');
const JoiObjectId = ObjectId(Joi);

const limit: NumberSchema = Joi.number();
const page: NumberSchema = Joi.number();
const city: StringSchema = Joi.string().min(2).max(50);
const country: StringSchema = city;
const date = Joi.date();
const start = Joi.object({
  date: date,
  pickup_address: Joi.string(),
  pickup_location: Joi.object({
    type: Joi.string(),
    coordinates: Joi.array(),
  }),
});
const end = start;
const cityObject = Joi.object({ name: Joi.string() });
const countryObject = cityObject;
const passenger = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
});
const driver = passenger;
const car = Joi.object({
  plate: Joi.string(),
});
const status = Joi.string();
const check_code = Joi.number();
const price = Joi.number();
const driver_location = Joi.object({
  type: Joi.string(),
  coordinates: Joi.array(),
});

export const idSchema = { _id: Joi.string().min(24).max(24).required() };

export const createTripSchema = {
  start: start.required(),
  country: countryObject.required(),
  city: countryObject.required(),
  passenger: passenger.required(),
  driver: driver.required(),
  car: car.required(),
  status: status.required(),
  check_code: check_code.required(),
  createdAt: date.required(),
  price: price.required(),
  driver_location: driver_location.required(),
};
export const updateTripSchema = {
  start,
  end,
  country: countryObject,
  city: countryObject,
  passenger,
  driver,
  car,
  status,
  check_code,
  price,
  driver_location,
};
export const filterSchema = {
  page,
  limit,
  city,
  country,
};

export const filterSchemaTotales = {
  city,
  country,
};
