import dotenv from 'dotenv';

export const dbURL =
  process.env.dbURL || 'mongodb://127.0.0.1:27017/neighbourneeds';
