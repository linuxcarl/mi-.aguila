import { trips } from './mocks/trips';

const db: Object = {
  trips,
};

interface filter {
  limit?: number;
  page?: number;
}
export async function find(table: string, filter: filter): Promise<string> {
  let data: string = db[table];
  let { limit, page } = filter;
  delete filter.limit;
  delete filter.page;

  if (Object.keys(filter).length) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        data = data.filter((item: object) => item[key] == value);
      }
    });
  }
  if (limit) {
    let init = limit * --page;
    limit = init ? Number(init) + Number(limit) : limit;
    data = data.length >= Number(limit) ? data.slice(init, limit) : data;
  }
  return data;
}
export async function findOne(table: string, filter: filter): Promise<string> {
  const row: string = await find(table, filter);
  return row[0];
}

export async function insert(table: string, data: any): Promise<string> {
  data = await findOne(table, { _id: '' });
  return data;
}

export async function update(
  table: string,
  data: any,
  id: string
): Promise<string> {
  const { _id } = await findOne(table, { _id: id });
  return _id ? [1] : [0];
}

export async function remove(table: string, id: string): Promise<string> {
  const { _id: string } = await findOne(table, { _id: id });
  return { _id };
}

export async function deleted(table: string, data: object): Promise<string> {
  const deletedData: string = await find(table, data);
  return deletedData;
}
