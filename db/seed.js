import { connectToDb, disconnectFromDb } from './helpers.js';
import Profile from '../models/profile.js';
import Post from '../models/post.js';
import data from './data.js';

const createPost = (text, service, urgency, createdBy) => {
  return {
    text: text,
    service: service,
    urgency: urgency,
    createdBy: createdBy
  };
};

async function seed() {
  await connectToDb();
  console.log('🤖 Connected to MongoDB!');

  // Clear out data before populating
  await Profile.deleteMany({});
  await Post.deleteMany({});

  // Seed Profiles
  const profiles = await Profile.create(data);
  console.log(`🌱 Seeded ${profiles.length} profiles`);

  // Seed Posts (with users from Profiles database)
  const randomUser1 = await Profile.findOne({ surname: 'Clending' });
  const randomUser2 = await Profile.findOne({ surname: 'Hoffmann' });
  const randomUser3 = await Profile.findOne({ surname: 'Long' });
  const generatedPosts = [
    createPost(
      "Hello there everyone! Can anyone help me plan my son's 6th birthday party next Saturday please?",
      'Party planning',
      'Fairly urgent',
      randomUser1._id
    ),
    createPost('I need a therapist!', 'Therapy', 'Urgent', randomUser2._id),
    createPost(
      'Anyone around here an interior designer or a decorator?',
      'cleaning, decorating',
      '',
      randomUser3._id
    )
  ];
  const posts = await Post.create(generatedPosts);
  console.log(`🌱 Seeded ${posts.length} posts`);

  await disconnectFromDb();
  console.log('🔌 Disconnected from MongoDB!');
}

seed();
