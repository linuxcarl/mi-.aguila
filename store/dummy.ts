import { trips } from './mocks/trips';

const db: any = {
  trips,
};

interface filter {
  _id?: string;
  limit?: number;
  page?: number;
  city?: string;
  country?: string;
}
export async function find(table: string, filter: filter): Promise<string[]> {
  let data: any = db[table];
  let { limit, page = 1 } = filter;
  delete filter.limit;
  delete filter.page;
  if (Object.keys(filter).length) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        data = data.filter((item: any) => item[key].name == value);
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
export async function counts(table: string, filter: filter): Promise<number> {
  const row: string[] = await find(table, filter);
  return row.length;
}
/*
export async function findOne(
  table: string,
  filter: filter
): Promise<string[]> {
  const row: string[] = await find(table, filter);
  return row[0];
}

export async function insert(table: string, data: any): Promise<object> {
  const _id: string = '';
  data = await findOne(table, { _id });
  return data;
}

export async function update(
  table: string,
  data: any,
  id: string
): Promise<object> {
  const { _id } = await findOne(table, { _id: id });
  return _id ? [1] : [0];
}

export async function remove(table: string, id: string): Promise<object> {
  const { _id: string } = await findOne(table, { _id: id });
  return { _id };
}

export async function deleted(table: string, data: object): Promise<string[]> {
  const deletedData: string[] = await find(table, data);
  return deletedData;
}
*/
