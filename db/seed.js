import { connectToDb, disconnectFromDb } from './helpers.js';
import Profile from '../models/profile.js';
import data from './data.js';

async function seed() {
  await connectToDb();
  console.log('🤖 Connected to MongoDB!');

  // Clear out data before populating
  await Profile.deleteMany({});

  const profiles = await Profile.create(data);
  console.log(`🌱 Seeded ${profiles.length} profiles`);

  await disconnectFromDb();
  console.log('🔌 Disconnected from MongoDB!');
}

seed();
