import { trips as dataTrips } from '../mocks/trips';
import * as store from '../mongo';

async function seeder() {
  const result = await store.execSeeder('trips', dataTrips);
  console.log('result', result);
}
seeder();
