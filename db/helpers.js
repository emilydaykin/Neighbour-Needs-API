import mongoose from 'mongoose';

import { dbURL } from '../config/environment.js';

export function connectToDb() {
  return mongoose.connect(dbURL);
}

export function disconnectDb() {
  return mongoose.dropDatabase(dbURL);
}
