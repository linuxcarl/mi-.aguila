import express from 'express';
import supertest, { SuperTest, Test } from 'supertest';

function testServer(route: string): SuperTest<Test> {
  const app: any = express();
  app.use(express.json());
  app.use('/', route);
  return supertest(app);
}
module.exports = testServer;
