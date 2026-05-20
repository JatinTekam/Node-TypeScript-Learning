import {config as conf} from 'dotenv';

conf();

const _config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET

};

export const config = Object.freeze(_config);
