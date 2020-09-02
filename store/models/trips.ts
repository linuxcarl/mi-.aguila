import mongoose from 'mongoose';

const { Schema } = mongoose;
const tripsSchema: any = new Schema({
  start: {
    date: { $date: Date },
    pickup_address: String,
    pickup_location: {
      type: String,
      coordinates: [Number],
    },
  },
  end: {
    date: { $date: Date },
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
  createdAt: { $date: Date },
  updatedAt: { $date: Date },
  price: Number,
  driver_location: {
    type: String,
    coordinates: [Number],
  },
});
export const modelTrips = mongoose.model('trips', tripsSchema);
