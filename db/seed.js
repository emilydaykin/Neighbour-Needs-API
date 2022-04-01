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
function createComment(text, rating, createdById, createdByName, createdBySurname) {
  return {
    text: text,
    rating: rating,
    createdById: createdById,
    createdByName: createdByName,
    createdBySurname: createdBySurname
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
  const randomUser1 = await Profile.findOne({ surname: 'Blanchard' });
  const randomUser2 = await Profile.findOne({ surname: 'Terrell' });
  const randomUser3 = await Profile.findOne({ surname: 'Long' });
  const randomUser4 = await Profile.findOne({ surname: 'Kalani' });
  const randomUser5 = await Profile.findOne({ surname: 'Montoya' });
  const randomUser8 = await Profile.findOne({ surname: 'Dotson' });
  const randomUser10 = await Profile.findOne({ surname: 'Clending' });
  const randomUser15 = await Profile.findOne({ surname: 'Peterson' });
  const randomUser18 = await Profile.findOne({ surname: 'Carney' });
  const randomUser19 = await Profile.findOne({ surname: 'Colon' });
  const randomUser20 = await Profile.findOne({ surname: 'Bennett' });
  const randomUser21 = await Profile.findOne({ surname: 'Hoffmann' });
  const randomUser22 = await Profile.findOne({ surname: 'Young' });
  const randomUser23 = await Profile.findOne({ surname: 'Rocha' });

  const generatedPosts = [
    createPost(
      'Anyone around here an interior designer or a decorator?',
      'interior design, decorating',
      '',
      randomUser3._id,
      randomUser3.firstName,
      randomUser3.surname
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
      "Hello there everyone! Can anyone help me plan my son's 6th birthday party next Saturday please?",
      'Party planning',
      'Fairly urgent',
      randomUser1._id,
      randomUser1.firstName,
      randomUser1.surname
    )
  ];

  const randomCommentee0 = profiles[0].comments;
  // const randomCommentee1 = profiles[1].comments;
  const randomCommentee2 = profiles[2].comments;
  const randomCommentee3 = profiles[3].comments;
  const randomCommentee4 = profiles[4].comments;
  const randomCommentee5 = profiles[5].comments;
  // const randomCommentee7 = profiles[7].comments;
  const randomCommentee8 = profiles[8].comments;
  // const randomCommentee9 = profiles[9].comments;
  const randomCommentee10 = profiles[10].comments;
  // const randomCommentee11 = profiles[11].comments;
  // const randomCommentee13 = profiles[13].comments;
  // const randomCommentee14 = profiles[14].comments;
  const randomCommentee15 = profiles[15].comments;
  // const randomCommentee16 = profiles[16].comments;
  const randomCommentee18 = profiles[18].comments;
  const randomCommentee19 = profiles[19].comments;
  const randomCommentee20 = profiles[20].comments;
  const randomCommentee21 = profiles[21].comments;
  const randomCommentee22 = profiles[22].comments;
  const randomCommentee23 = profiles[23].comments;

  const generatedComments = [
    randomCommentee0.push(
      createComment(
        'Absolutely amazing work feel truly honoured to have had you work with me!!!',
        5,
        randomUser1._id,
        randomUser1.firstName,
        randomUser1.surname
      )
    ),
    randomCommentee2.push(
      createComment(
        'Thank you so much for taking such good care of my kids!',
        5,
        randomUser2._id,
        randomUser2.firstName,
        randomUser2.surname
      )
    ),
    randomCommentee3.push(
      createComment(
        'Thanks for fixing my bathtub!',
        4,
        randomUser3._id,
        randomUser3.firstName,
        randomUser3.surname
      )
    ),
    randomCommentee4.push(
      createComment(
        'Thank you so much for my website! Love it!',
        4,
        randomUser4._id,
        randomUser4.firstName,
        randomUser4.surname
      )
    ),
    randomCommentee5.push(
      createComment(
        'I would give a 1 but they turned up for the job so I thought that would be unfair',
        2,
        randomUser5._id,
        randomUser5.firstName,
        randomUser5.surname
      )
    ),
    randomCommentee8.push(
      createComment(
        'Good work but turned up a little late',
        3,
        randomUser8._id,
        randomUser8.firstName,
        randomUser8.surname
      )
    ),
    randomCommentee10.push(
      createComment(
        'I was nervous to leave Sam with strangers, but my worries quickly faded. Thank you so much!',
        4,
        randomUser10._id,
        randomUser10.firstName,
        randomUser10.surname
      )
    ),
    randomCommentee15.push(
      createComment(
        'I would sincerely recommend any services for them, would give 5 but perfection is not attainable for humankind!!!',
        4,
        randomUser15._id,
        randomUser15.firstName,
        randomUser15.surname
      )
    ),
    randomCommentee18.push(
      createComment(
        'My sitter took great care of my cat, above and beyond my expectations',
        5,
        randomUser18._id,
        randomUser18.firstName,
        randomUser18.surname
      )
    ),
    randomCommentee19.push(
      createComment(
        'Great service! Totally recommend it!',
        5,
        randomUser19._id,
        randomUser19.firstName,
        randomUser19.surname
      )
    ),
    randomCommentee20.push(
      createComment(
        'We needed somebody who could really follow through on a relatively complicated painted scheme. Much better than expected.',
        4,
        randomUser20._id,
        randomUser20.firstName,
        randomUser20.surname
      )
    ),
    randomCommentee21.push(
      createComment(
        'I was so happy when my son got his first A* on maths. Thank you so much Guerrero.',
        5,
        randomUser21._id,
        randomUser21.firstName,
        randomUser21.surname
      )
    ),
    randomCommentee22.push(
      createComment(
        'Very professional',
        3,
        randomUser22._id,
        randomUser22.firstName,
        randomUser22.surname
      )
    ),
    randomCommentee23.push(
      createComment(
        'Thank for fixing my phone so fast',
        4,
        randomUser23._id,
        randomUser23.firstName,
        randomUser23.surname
      )
    )
  ];
  await profiles[0].save();
  await profiles[2].save();
  await profiles[3].save();
  await profiles[4].save();
  await profiles[5].save();
  await profiles[8].save();
  await profiles[10].save();
  await profiles[15].save();
  await profiles[18].save();
  await profiles[19].save();
  await profiles[20].save();
  await profiles[21].save();
  await profiles[22].save();
  await profiles[23].save();

  // console.log('profile 0:', profiles[0]);
  const posts = await Post.create(generatedPosts);
  console.log(`🌱 Seeded ${posts.length} posts`);
  console.log(`🌱 Seeded ${generatedComments.length} comments`);
  await disconnectFromDb();
  console.log('🔌 Disconnected from MongoDB!');
}

seed();
