const collection: string = 'trips';
module.exports = function (injectedStore: any): any {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  async function findAll(filter: object): Promise<string[]> {
    const trips: string[] = await store.find(collection, filter);
    return trips;
  }
  async function findTotales(filter: object): Promise<number> {
    const trips: number = await store.counts(collection, filter);
    return trips;
  }
  async function create(data: object): Promise<object> {
    const created: object = await store.create(collection, data);
    return created;
  }
  async function update(data: object, _id: string): Promise<object> {
    const updated: object = await store.update(collection, data, _id);
    return updated;
  }
  return {
    findAll,
    findTotales,
    create,
    update,
  };
};
