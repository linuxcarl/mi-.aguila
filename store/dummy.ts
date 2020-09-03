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
export async function create(table: string, data: any): Promise<object> {
  let result = await db[table][0];
  return result;
}
export async function update(table: string, data: any): Promise<object> {
  let result = await db[table][0];
  return result;
}
