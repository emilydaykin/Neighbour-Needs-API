const createProfile = (
  firstName,
  surname,
  email,
  password,
  services,
  bio,
  averageRating,
  city,
  region,
  imageProfile,
  imageService,
  isHelper,
  posts,
  comments,
  isAdmin
) => {
  return {
    firstName: firstName,
    surname: surname,
    email: email,
    password: password,
    services: services,
    bio: bio,
    averageRating: averageRating,
    city: city,
    region: region,
    imageProfile: imageProfile,
    imageService: imageService,
    isHelper: isHelper,
    posts: posts,
    comments: comments,
    isAdmin: isAdmin
  };
};

const profiles = [
  createProfile(
    'Admin',
    'Admin',
    'admin@user.com',
    'Password1!@',
    [],
    '',
    0,
    'London',
    'North',
    '', // profile image
    '', // service image
    false, // is a helper or not
    [],
    [], //comments
    true // isAdmin
  ),
  createProfile(
    'Erika',
    'Sanders',
    'es@user.com',
    'Password1!@',
    ['wedding planning'],
    'I am a wedding planner ready to make your dream wedding come true! ', // bio
    4.1,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02RYCN2K40-a47e8895f34c-512',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Glenn',
    'Sosa',
    'gs@user.com',
    'Password1!@',
    ['baby sitting'],
    'I adore kids and am looking to earn my own money to save up for a summer camp next year. Parents love me because more than just watching the kids, I always plan fun activities and keep the house tidy.', // bio
    3.9,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U030DDX0YP2-3fc7e7a6502e-512', // profile image
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHNpdHRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Wilcox',
    'Fields',
    'wf@user.com',
    'Password1!@',
    ['plumbing'],
    "Even if it's an odd time – leakage doesn’t listen to anyone – we are ready to take responsibility of that leakage. #plumbers.", // bio
    2.5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02K9KRPQH2-e7c2fe998fcd-512', // profile image
    'https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Janelle',
    'Parrish',
    'jp@user.com',
    'Password1!@',
    ['web development'],
    'Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an e-commerce web app, customer web portal, documentary launch website, and donations web app for a local charity. Passionate about software architecture and cloud computing.', // bio
    5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02QAC7RXPV-06e42c612b52-512', // profile image
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Margery',
    'Wilder',
    'mw@user.com',
    'Password1!@',
    ['therapy'],
    'I am a relationship expert committed to helping anyone learn how to build healthier relationships. I believe in taking a collaborative approach to helping clients reach their goals. I am passionate about helping people making their life better. If you are interested in scheduling a consultation with me, please send an appointment request.', // bio
    1.3,
    'London',
    'North',
    'https://media-exp1.licdn.com/dms/image/C5103AQFSxetNxW5QJA/profile-displayphoto-shrink_200_200/0/1517094934112?e=1654128000&v=beta&t=o531Yc7-C4jw-ua1Tjog5whULw6O0IREWsfAwRd55Ms', // profile image
    'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlcmFweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),

  createProfile(
    'Maurizio',
    'Logan',
    'ml@user.com',
    'Password1!@',
    ['therapy'],
    "I am a stress management expert with a decade of experience coaching, guiding and helping people become their best selves. My clients have achieved life-changing results and can testify. Please don't hesitate to reach out to find out more.", // bio
    4.2,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U01L9S4FTLZ-63e00dae7cdd-512', // profile image
    'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlcmFweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Paulina',
    'Chen',
    'pc@user.com',
    'Password1!@',
    [],
    '', // bio
    0,
    'London',
    'North',
    '', // profile image
    '', // service image
    false, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Lessie',
    'Marsh',
    'lm@user.com',
    'Password1!@',
    ['party planning'],
    'Planning an unforgettable event is a form of art. We are bringing you the prettiest of details so you can focus on the bigger picture.', // bio
    4.7,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02QAC7RXPV-a6758234f7f0-512', // profile image
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHklMjBwbGFubmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Tabatha',
    'Farley',
    'tf@user.com',
    'Password1!@',
    ['carpentry'],
    'I am responsible for working with wood to build and repair structures you might need help with.', // bio
    5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02STM08KMY-74668cc30608-512', // profile image
    'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGVudHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Aslan',
    'Roqui',
    'ar@user.com',
    'Password1!@',
    ['shelves fitting'],
    "I can fix your shelves for you so that you don't have to worry about it!", // bio
    2,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02UCPTR61K-dbea284e2407-512', // profile image
    'https://images.unsplash.com/photo-1530153739137-cafe11da39aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoZWx2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Burt',
    'Rocha',
    'br@user.com',
    'Password1!@',
    ['dog walking'],
    'I grew up on a farm so I have always been around animals and love them. I provide dog walking services. I am also available for overnight care.', // bio
    2.7,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02SQP54RLM-a550afb7c9a1-512', // profile image
    'https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Dolores',
    'Young',
    'dy@user.com',
    'Password1!@',
    ['massaging'],
    "Before I became a professional massage therapist, I would spontaneously start rubbing friends' shoulders and upper backs when they mentioned any tension or discomfort. I just enjoyed helping them feel better. After years of being complimented on how good I was, I decided to make it official", // bio
    1.6,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02QAC7RXPV-a66e1701a3a6-192', // profile image
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFzc2V1c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Aline',
    'Hoffmann',
    'ah@user.com',
    'Password1!@',
    [],
    '', // bio
    0,
    'London',
    'North',
    '', // profile image
    '', // service image
    false, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Bullock',
    'Bennett',
    'bb@user.com',
    'Password1!@',
    ['decorator'],
    "Can't wait to help you decorate your home!", // bio
    4.3,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02QCKEJEHJ-16c19eb60fcf-512', // profile image
    'https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlY29yYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Fry',
    'Colon',
    'fc@user.com',
    'Password1!@',
    ['nannying'],
    'I can take care of your kids whenever you need to work.', // bio
    5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U027VDM1BTK-e12a10378988-512', // profile image
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Trevor',
    'Carney',
    'tc@user.com',
    'Password1!@',
    ['architecture'],
    'I studied architecture at university', // bio
    4.1,
    'London',
    'North',
    'https://media-exp1.licdn.com/dms/image/C4E03AQFvRuDqaNMLLQ/profile-displayphoto-shrink_400_400/0/1647541273789?e=1654128000&v=beta&t=9JSFarOS45p99ScaMWMmUvL5UkaNkpi9lMRMoCdjqBg', // profile image
    'https://images.unsplash.com/photo-1557996133-ee6d20a488fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Porter',
    'Peterson',
    'pp@user.com',
    'Password1!@',
    ['interior design'],
    'Every home is a unique expression of its homeowners. We ensure your house design is in keeping with your distinct tastes. Everything, from creating furniture to choosing furnishings and lighting, is meant to reflect your sense of design', // bio
    3.5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02AHLPNSNQ-7a7399fc3501-512', // profile image
    'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Karthik',
    'Clending',
    'kc@user.com',
    'Password1!@',
    [],
    '', // bio
    0,
    'London',
    'North',
    '', // profile image
    '', // service image
    false, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Vincent',
    'Dotson',
    'vd@user.com',
    'Password1!@',
    ['cat sitting'],
    'I do cat sitting and I love cats. Anytime you need to go on holiday and are afraid to leave your cat home alone I am here! Vincent to the rescue! ', // bio
    2.8,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02SM10EE6S-3b8372b56926-512', // profile image
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwc2l0dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Saundra',
    'Montoya',
    'sm@user.com',
    'Password1!@',
    ['cleaning'],
    'Too busy to clean? I am here to help you!', // bio
    3.5,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02QAC7RXPV-03b46fe1a57f-512', // profile image
    'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Miranda',
    'Kalani',
    'mk@user.com',
    'Password1!@',
    ['painting'],
    'I have been a painter for 5 years now. I will be happy to help you paint your house!', // bio
    4.6,
    'London',
    'North',
    '', // profile image
    'https://images.unsplash.com/photo-1529722155810-17303d209942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Guerrero',
    'Long',
    'gl@user.com',
    'Password1!@',
    ['maths tutoring'],
    'With my math tutoring, your son or daughter will get the exact attention she needs. The tutoring is personalized to their exact needs !', // bio
    3.4,
    'London',
    'North',
    '', // profile image
    'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGhzJTIwdHV0b3Jpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Imelda',
    'Terrell',
    'it@user.com',
    'Password1!@',
    ['electrical maintenance'],
    'Specialised in the complete installation of electrical services to residential and commercial buildings. ', // bio
    4.4,
    'London',
    'North',
    'https://media-exp1.licdn.com/dms/image/C4D03AQEPZm_G5Kv7xg/profile-displayphoto-shrink_400_400/0/1536674161453?e=2147483647&v=beta&t=A8SOWV7Z4P0RTFvJDSvskdnwOkIiJf32wQqZpOJk5Os', // profile image
    'https://images.unsplash.com/photo-1627195706291-ec166a2c2582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWxldHJpY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Diego',
    'Blanchard',
    'db@user.com',
    'Password1!@',
    ['electronics repair'],
    'I am an electronics repair technician and I offer the following services: Repairing and replacing components, installing and updating software, installing and setting up new appliances and machines', // bio
    3.1,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02847P7ME2-297de63247f9-512', // profile image
    'https://images.unsplash.com/photo-1597424216910-9e56f8a09b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmVzJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  )
];

export default profiles;
