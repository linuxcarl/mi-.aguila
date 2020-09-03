const testServer = require('../testServer');
import { trips as tripsMock } from '../../store/mocks/trips';

describe('routes - trips', function () {
  const route = require('../../api/components/trips/network');
  const request = testServer(route);

  describe('GET /trips', function () {
    test('should respond with status 200', function (done) {
      request.get('/').expect(200, done);
    });
    test('should respond with status 200 with params city=Medellin', function (done) {
      request.get('/?city=Medellin').expect(200, done);
    });

    test('should respond with status 200 with params country=Colombia', function (done) {
      request.get('/?country=Colombia').expect(200, done);
    });

    test('should respond with status 200 with params limit=1', function (done) {
      request.get('/?limit=1').expect(200, done);
    });

    test('should respond with status 200 with params page=2', function (done) {
      request.get('/?page=2').expect(200, done);
    });
  });

  describe('GET /trips/total', function () {
    test('should respond with status 200', function (done) {
      request.get('/total').expect(200, done);
    });
    test('should respond with status 200 with params city=Medellin', function (done) {
      request.get('/total/?city=Medellin').expect(200, done);
    });

    test('should respond with status 200 with params country=Colombia', function (done) {
      request.get('/total/?country=Colombia').expect(200, done);
    });
  });
  describe('POST /trips', function () {
    it('should create new trip', async (done) => {
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

      const res = await request.post('/').send(dataTrip);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toMatchObject({
        error: expect.any(Boolean),
        status: expect.any(Number),
        body: expect.any(Object),
      });
      expect(res.body.body).toMatchObject({
        _id: expect.any(String),
        start: expect.any(Object),
        end: expect.any(Object),
        country: expect.any(Object),
        city: expect.any(Object),
        passenger: expect.any(Object),
        driver: expect.any(Object),
        car: expect.any(Object),
        status: expect.any(String),
        check_code: expect.any(Number),
        price: expect.any(Number),
        driver_location: expect.any(Object),
        createdAt: expect.any(String),
      });
      done();
    });
  });
});
