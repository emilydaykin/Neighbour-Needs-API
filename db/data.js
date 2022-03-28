const createProfile = (
  firstName,
  surname,
  email,
  password,
  services,
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
    0,
    'London',
    'North',
    '', // profile image
    '', // service image
    false, // is a helper or not
    [],
    [],
    true // isAdmin
  ),

  createProfile(
    'Erika',
    'Sanders',
    'es@user.com',
    'Password1!@',
    ['wedding planning'],
    4.1,
    'London',
    'North',
    '../bitmoji.jpeg',
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
    7,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    9,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    10,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    6.8,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    7.7,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    ['carpentering'],
    9.3,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    9.5,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    8.9,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    9,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    8.7,
    'London',
    'North',
    '', // profile image
    '', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
  createProfile(
    'Traci',
    'Carney',
    'tc@user.com',
    'Password1!@',
    ['architecture'],
    9.5,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    8.2,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    7.3,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    10,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    9.2,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    7.6,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    ['electician'],
    8.8,
    'London',
    'North',
    '', // profile image
    '', // service image
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
    ['electonics repair'],
    7.9,
    'London',
    'North',
    '', // profile image
    '', // service image
    true, // is a helper or not
    [],
    [],
    false
  )
];

export default profiles;
