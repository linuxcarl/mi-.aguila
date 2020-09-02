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
});
