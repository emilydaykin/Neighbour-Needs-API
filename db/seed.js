import { connectToDb, disconnectFromDb } from './helpers.js';
import Profile from '../models/profile.js';
import Post from '../models/post.js';
import data from './data.js';

const createPost = (text, service, urgency, createdById, createdByName, createdBySurname) => {
  return {
    text: text,
    service: service,
    urgency: urgency,
    createdById: createdById,
    createdByName: createdByName,
    createdBySurname: createdBySurname
  };
};
function createComment(text, rating, createdById) {
  return {
    text: text,
    rating: rating,
    createdById: createdById
  };
}
// const jsonComment = JSON.stringify(createComment);
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
      randomUser1._id,
      randomUser1.firstName,
      randomUser1.surname
    ),
    createPost(
      'I need a therapist!',
      'Therapy',
      'Urgent',
      randomUser2._id,
      randomUser2.firstName,
      randomUser2.surname
    ),
    createPost(
      'Anyone around here an interior designer or a decorator?',
      'cleaning, decorating',
      '',
      randomUser3._id,
      randomUser3.firstName,
      randomUser3.surname
    )
  ];

  const randomCommentee1 = profiles[0].comments;
  // console.log('randomCommentee1', randomCommentee1);
  const randomCommentee2 = profiles[8].comments;
  const randomCommentee3 = profiles[12].comments;
  const randomCommentee4 = profiles[15].comments;

  const generatedComments = [
    randomCommentee1.push(
      createComment(
        'Absolutely amazing work feel truly honoured to have had you work with me!!!',
        5,
        randomUser1._id
      )
    ),
    randomCommentee2.push(
      createComment('Good work but turned up a little late', 3, randomUser2._id)
    ),
    randomCommentee3.push(
      createComment(
        'I would give a 1 but they turned up for the job so I thought that would be unfair',
        2,
        randomUser3._id
      )
    ),
    randomCommentee4.push(
      createComment(
        'I would sincerly recommend any services for them, would give 5 but perfection is not attainable for humankind!!!',
        4,
        randomUser3._id
      )
    )
  ];
  await profiles[0].save();
  await profiles[8].save();
  await profiles[12].save();
  await profiles[15].save();

  // console.log('profile 0:', profiles[0]);
  const posts = await Post.create(generatedPosts);
  console.log(`🌱 Seeded ${posts.length} posts`);
  console.log(`🌱 Seeded ${generatedComments.length} comments`);
  await disconnectFromDb();
  console.log('🔌 Disconnected from MongoDB!');
}

seed();
