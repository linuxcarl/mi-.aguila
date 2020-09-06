import db, { model } from 'mongoose';
import { config } from '../config';

import { modelTrips } from './models/trips';

db.Promise = global.Promise;

const USER = encodeURIComponent(config.db.dbUser);
const PASSWORD = encodeURIComponent(config.db.dbPassword);
const DB_NAME = config.db.dbName;
const DB_HOST = config.db.dbHost;
const MONGO_URI: string = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

interface filter {
  _id?: string;
  limit?: number;
  page?: number;
  city?: string;
  country?: string;
}
async function connect(MONGO_URI: string): Promise<void> {
  await db.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[db] Conectada con el server db');
}
connect(MONGO_URI);
export async function find(
  collection: string,
  filter: filter
): Promise<object> {
  let { limit = 20, page = 1 } = filter;
  delete filter.limit;
  delete filter.page;
  const queryFilter: object = cleanFilter(filter);
  const data = modelTrips
    .find(queryFilter)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  return data;
}
export async function counts(
  collection: string,
  filter: filter
): Promise<number> {
  const queryFilter: object = cleanFilter(filter);
  const data = modelTrips.countDocuments(queryFilter);
  return data;
}

export async function create(
  collection: string,
  data: object
): Promise<object> {
  const saveData = new modelTrips(data);
  const result = saveData.save();
  return result;
}
export async function update(
  collection: string,
  data: object,
  _id: string
): Promise<object> {
  const modelUpdate: any = await modelTrips.findOne({
    _id: _id,
  });
  Object.assign(modelUpdate, data);
  const result = await modelUpdate.save();
  return result;
}

export async function execSeeder(
  collection: string,
  data: object
): Promise<any> {
  const ModelTrips = new modelTrips();
  modelTrips
    .deleteMany({})
    .then((result) => {
      console.log(result);
    })
    .catch((e) => console.log(e));
  const result = modelTrips.insertMany(data);
  return result;
}

function cleanFilter(filter: filter): object {
  let _filter: any = {};
  Object.entries(filter).forEach(([index, value]) => {
    if (value) {
      _filter[index] = { name: value };
    }
  });
  return _filter;
}
