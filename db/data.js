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
    isAdmin: isAdmin,
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
    5,
    'London',
    'North',
    'https://lh3.googleusercontent.com/zDacpTp885X_epoTQ30F_cucW82dSy7QecSBDx1SO1ZtMHwB1-FRUbfgT9gz79fNJ0XBMn_4Ut0ItYgpuhzYEAuhH1QI_HikRQuWd2OBUuHf9d08ychH7x4w4it90yHcptgT2oQQ-4Mjpk-wnOBUbc8U3VMGPFX0d_mV5xHHAyGu894wudJcO2ER72HVKzy8HZPeKcYBcIirihSq9YqLEEt-jFngYE2dhoboqhwAlBGZOOWdAujYWJ2wi_jbBvjGWTB_8qLG5Fqw-GXm_ApIXhB7OivD_qvFWGKQprvIl3VYi-N4JiwrxiYQb3Qy5ERn3aaelBj1Df06njbcW66dNqQImxwfEJLE5SLkoh5-fEDeMPYEnXzdVzUHYecz8b0YZ3n4eQaGXA_HwLGYnYkMkiuHvRmVct1sXbOqo5JwtBwCxaeLjeVtPuxiqTW46WZtVCv3uwEMtYw8tRx_6vAVZzy37XPvGcu1DeqTfNMr2bFiunCmN-dBHEOfgqbD110zOciNV8Szw9UQKpA-rtqN_XvsFs-_tFmVFMLBfRSCCl3Faak6EmZNhkMAAA34DpTJhTspqLXLGZeB9YrSK8IHq7hcIqwI2iHcLABwi3DxIZLtKmH_2Wg70edJ-VZEPWhZ9gwsUQmAMWFojMkjJn8wg0RQ3fSOlPNaJJaXZfbCdZbg9HbjMj2GfyVJOs4KOP_C1wKpD1pGdhapoRrTiaIMN_6eri40OAdgBRbm_yCu-hByCNijhqQZzumg7zA=w1300-h866-no?authuser=0', // profile image
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
    4.7,
    'London',
    'North',
    'https://lh3.googleusercontent.com/PNZiX2OzRsopO37L_uZ2MZ3gtdG7wX9FqUf6E_OLRQeDsWnWDlFD_jxzjtXqULmt3ePo9RBzLctx54_NPCqGB3GBjQADNiUfg0h5DfSlehb_JGgcToqZdx6tZDbNVtRrc7YKodIEuPTly7aKveOX8dWCH-3ZrdW0yl29-01MHfvvnl4WAPKxFxVIxAFx_IP8Yw6N5c46kZ6L6YpLMJmtDITR7TzRluLcjOKFgzBgBF4JYNNpdQIt9hNyEZmR6OsIsv0qw4ccl00tQSCjoBJ9ad7yl32BYnkiC9Krf4SfCOkZuGRlDvdfnXKS_NVFAWEYcKpOzKHP_qMtrRRmZM6LA09xe0qCXCHOlyJP8NDsj06Avf3s9-svgXT4Hn3c08wFv8GbCF-LlvATEIM5g6vY7f8oszM8lm9x4HXhCoQXVHDiLKdtESWYG2nBVlxe1T3bweQ9tL_CXAVNKU4IQCfPB2KlWX16ltRbREW-Mqu9mnb2ww_a2LNupAa2F8SskIun7LkY-fJbXtQGYOa3IkW-WIpd9oIsEu2Xtwi4HNwYSxSf3ad6zDXK1S2fEzxGPTVSyJVZS8S0IVJhuIOO0n5hHb2nfcTosYP-3wHMEuM633UAV4ddDrVCzSu4BL4PpzgCUu2_t0pY9GdrAmEwzV9P5CzDW5UVU0p4ErJH0uxHSpOd0YV3VbN_FwQb5ezLNk4BiUChEKPM_XS6L5u4x8Oo9d5ZGMhJDn45l1-u74yj_W8vfJSa2UgqDh73iZgL=w1155-h866-no?authuser=0', // profile image
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
    1.6,
    'London',
    'North',
    'https://lh3.googleusercontent.com/aZde74e-giy6G79JZiOwHQCVqE1-kbBvQbf1qzx6T6OlVedlNdPSb-wJdd5t4XYh5-JwSz-USrAjVhF3qsyG8qB5AcVvccrpk2OSaaq9PqwNN6O6yVMq98a_InDKPGvMpI3DahurKV2k8kc_saNfSbt7ZvDCK3rzkPGAchX15cJTvls_XeDbjHaV_EYPUQfQmAKuUzMZuDE1B68XIy-vmYVbjBN4MjITp3_V0twycSYGBXvCDGWN3H8D1_KeojYDb1AQQ_M9-m1Tuu5WWWksr7fmhMM7Ytq_3cnr0aSVHBtHcLSSgjUgP4OKNXvt3gpssB-njIAGF-jhXevJsjdio9LHuO9ELQWXYWdebjMSRQGaiUJgE-lvk3Ud89oaoOhcsh4jFrICUn1WEKC4KdCRkQSswL-ah5AEK4Lo5iatFHJdYs_hZKokBCD76g-5ladTgxlRYgl0VG1elLlboEQphUT6Q551XAEuo355GNMKfGMFgoUftIWF4IVAgl3zDh0n6M782bIDodlEnIf1ULYmpO9jvrZuBkVB2GNT1Y3fAZXogOGBKHqNKX0XVraINGV9wpkcUTrAy91LQb_Rij1Wvjz9Ywx0Pb_JpXluMqnSYcTb6GJFhTutWJEEQRfGNZ2kF58lDHMVu3V6w8Xt6MSEWwHvnfxVviGaQXEayOYbpgoAl24A5zIznXhYsB_QOzSbRTpaRBZbJRocqWt1UzAWA_Qb62CVdzVkofzBn6pY_be6P3UUiJuYgnPQ3TI=w1155-h866-no?authuser=0', // profile image
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
    4.1,
    'London',
    'North',
    'https://files.slack.com/files-pri/T0351JZQ0-F039JSPFQH2/img_4097.png', // profile image
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
    3.5,
    'London',
    'North',
    'https://lh3.googleusercontent.com/zbSd_q5FLckPdssYbaYlgr1ZSL6km83ay0aJ5tjYODRdCiKAMGF7hwcd4fhl4775qvcqUE41m_CA82Hkvyvf_O5KkljyJyAvQP23KRuhUke88usbK8_H0dP1rF_2EivfLFEih8kiNsS0oHpkqzm85xWTtloBNo6T3-KRdDup-2pwJfm1sJyNS56JYhCA69Si87rC7a92tXHTCGrYhWIrw8n9q0TeIEGQtrxGHrwQLlyG43trlcqRrhK-Xwb0zvRNlzT8J6q2er77_uVUA-YKAYFs0cpkeyN3Y69coB5YDHmWu0n6-DE3caRj57uxeO3fX_AyuNCc5QZZ_J8MbexiZaa__wRDVe88QD3x1yEU7SlCV47zV1Bfh6UqJmuT_zrrPV3kNGp5cI7qc9Hx3OM-tU9dfBQCx4v5CSI0qKP44rR8g5EO7sh-TNHOj4rSUiMGZrKfdPp9OB5I300dXa4gByuROKgiz_i6DkKhS7dBv_QAmCMhxmJeW9ft6aJMPQHHO78tD2G2Az9HMwM8nu_ZQ6DR0IH-tM3Cyfa41hW6lCT190iweADHRPY7F3907BkpVidEbXdzQoFV_k0KTh_rpkWVrLm_0GfIJhzmxg4Mo9UnlfThWb3dZSGQ1Rz6JtcfMlJE0TKyPFwSNv9eQancGGPegxg_zx7n7QTtCN3M2CTXd-Xw1odgL3ESYyFhpgDN-0jw6kcHS7HWadkr06S9odNYf1dFFTOhWD3M4MwKvb9aBiJhGhWvXla47Kk=w1300-h866-no?authuser=0', // profile image
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
    ['electric maintenance'],
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
    3.1,
    'London',
    'North',
    'https://ca.slack-edge.com/T0351JZQ0-U02847P7ME2-297de63247f9-512', // profile image
    'https://images.unsplash.com/photo-1597424216910-9e56f8a09b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmVzJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', // service image
    true, // is a helper or not
    [],
    [],
    false
  ),
];

export default profiles;
