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
  test('Should return one trip with filter city', () => {
    return Controller.findAll({ limit: 1, city: 'Bogotá' }).then(
      (trips: string[]) => {
        expect(trips[0]).toStrictEqual(tripsMock[0]);
      }
    );
  });
  test('Should return one trip with filter country', () => {
    return Controller.findAll({ limit: 1, country: 'Colombia' }).then(
      (trips: string[]) => {
        expect(trips[0]).toStrictEqual(tripsMock[0]);
      }
    );
  });
  test('Should return one trip with page = 2 ', () => {
    return Controller.findAll({ limit: 1, page: 2 }).then((trips: string[]) => {
      expect(trips[0]).toStrictEqual(tripsMock[1]);
    });
  });

  test('Should return total trips ', () => {
    return Controller.findTotales({}).then((trips: number) => {
      expect(trips).toStrictEqual(tripsMock.length);
      expect(typeof trips).toBe('number');
    });
  });
  test('Should return total trips by country ', () => {
    return Controller.findTotales({ country: 'Colombia' }).then(
      (trips: number) => {
        expect(trips).toStrictEqual(tripsMock.length);
        expect(typeof trips).toBe('number');
      }
    );
  });
  test('Should return total trips by city ', () => {
    return Controller.findTotales({ city: 'Medellin' }).then(
      (trips: number) => {
        expect(typeof trips).toBe('number');
      }
    );
  });
});
