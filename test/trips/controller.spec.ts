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

  test('should return object trip created', () => {
    const dataTrip = {
      start: {
        date: new Date(),
        pickup_address:
          'Inexmoda - Carrera 43 # 9 Sur - 195, Medellín, Antioquia, Colombia',
        pickup_location: {
          type: 'Point',
          coordinates: [-75.5758876, 6.1941856],
        },
      },
      country: { name: 'Colombia' },
      city: { name: 'Medellin' },
      passenger: { first_name: 'Jorge', last_name: 'Londoño Mejía' },
      driver: {
        first_name: 'Omar Fernando ',
        last_name: 'Calderon Montoya ',
      },
      car: { plate: 'WDX501' },
      status: 'near',
      check_code: '60',
      price: 50900.0,
      driver_location: {
        type: 'Point',
        coordinates: [-75.58576852083206, 6.221568137640936],
      },
    };
    return Controller.create(dataTrip).then((trip: any) => {
      expect(trip).toMatchObject({
        _id: expect.any(String),
        start: expect.any(Object),
        end: expect.any(Object),
        country: expect.any(Object),
        city: expect.any(Object),
        passenger: expect.any(Object),
        driver: expect.any(Object),
        car: expect.any(Object),
        status: expect.any(String),
        check_code: expect.any(String),
        price: expect.any(Number),
        driver_location: expect.any(Object),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });

  test('should return object trip created', () => {
    const dataTrip = {
      end: {
        date: new Date(),
        pickup_address:
          'Inexmoda - Carrera 43 # 9 Sur - 195, Medellín, Antioquia, Colombia',
        pickup_location: {
          type: 'Point',
          coordinates: [-75.5758876, 6.1941856],
        },
      }
    };
    return Controller.update(dataTrip).then((trip: any) => {
      expect(trip).toMatchObject({
        _id: expect.any(String),
        start: expect.any(Object),
        end: expect.any(Object),
        country: expect.any(Object),
        city: expect.any(Object),
        passenger: expect.any(Object),
        driver: expect.any(Object),
        car: expect.any(Object),
        status: expect.any(String),
        check_code: expect.any(String),
        price: expect.any(Number),
        driver_location: expect.any(Object),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });
});
