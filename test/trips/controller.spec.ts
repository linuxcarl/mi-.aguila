const controller = require('../../api/components/trips/controller');
import { trips as tripsMock } from '../../store/mocks/trips';
const store = require('../../store/dummy');
const Controller = controller(store);
describe('controller - trips', () => {
  test('Should return one trip', () => {
    return Controller.findAll({ limit: 1 }).then((trips: string[]) => {
      expect(trips[0]).toStrictEqual(tripsMock[0]);
    });
  });
});
