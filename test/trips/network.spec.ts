const testServer = require('../testServer');
import { trips as tripsMock } from '../../store/mocks/trips';

describe('routes - trips', function () {
  const route = require('../../api/components/trips/network');
  const request = testServer(route);

  describe('GET /trips', function () {
    test('should respond with status 200', function (done) {
      request.get('/').expect(200, done);
    });
  });
});
