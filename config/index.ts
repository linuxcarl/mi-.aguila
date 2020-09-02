import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  api: {
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
  },
  dev: process.env.NODE_ENV !== 'production',
  db: {
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
  },
};
