import { string } from '@hapi/joi';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const tripsSchema: any = new Schema(
  {
    start: {
      date: Date,
      pickup_address: String,
      pickup_location: {
        type: String,
        coordinates: [Number],
      },
    },
    end: {
      date: Date,
      pickup_address: String,
      pickup_location: {
        type: String,
        coordinates: [Number],
      },
    },
    country: { name: String },
    city: { name: String },
    passenger: { first_name: String, last_name: String },
    driver: {
      first_name: String,
      last_name: String,
    },
    car: { plate: String },
    status: String,
    check_code: Number,
    createdAt: Date,
    updatedAt: Date,
    price: Number,
    driver_location: {
      type: String,
      coordinates: [Number],
    },
  },
  { typeKey: '$type' }
);
export const modelTrips = mongoose.model('trips', tripsSchema);
