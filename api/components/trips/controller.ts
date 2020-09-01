const TABLE: string = 'trips';
module.exports = function (injectedStore: any): any {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  async function findAll(filter: object): Promise<string[]> {
    const trips: string[] = await store.find(TABLE, filter);
    return trips;
  }
  return {
    findAll,
  };
};
