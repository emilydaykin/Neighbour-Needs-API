import Profile from '../models/profile.js';

// GET (only helpers)
const getAllProfiles = async (req, res, next) => {
  try {
    const allProfiles = await Profile.find({ isHelper: true });
    return res.status(200).json({ status: 'success', body: allProfiles });
  } catch (err) {
    next(err);
  }
};

// GET (by id)
const getProfileById = async (req, res, next) => {
  // returns a single OBJECT
  try {
    // const profileById = await Profile.find({ isHelper: true, _id: req.params.id });
    const profileById = await Profile.findById(req.params.id);

    if (!profileById || profileById.length === 0) {
      return res.status(404).json({ message: 'Profile not found (invalid ID)' });
    } else {
      return res.status(200).json({ status: 'success', body: profileById });
    }
  } catch (err) {
    next(err);
  }
};

// GET (by name, services, city, or region)
const searchProfile = async (req, res, next) => {
  // returns AN ARRAY (of objects)
  try {
    const { searchTerm } = req.params;
    const allProfiles = await Profile.find({ isHelper: true });

    const searchTermLowerCase = searchTerm.toLowerCase();
    const profileByNameOrServiceOrArea = allProfiles.filter(
      (profile) =>
        profile.firstName.toLowerCase().includes(searchTermLowerCase) ||
        profile.surname.toLowerCase().includes(searchTermLowerCase) ||
        profile.services.find((service) => service.toLowerCase().includes(searchTermLowerCase)) ||
        profile.city.toLowerCase().includes(searchTermLowerCase) ||
        profile.region.toLowerCase().includes(searchTermLowerCase)
    );

    if (profileByNameOrServiceOrArea.length !== 0) {
      res.status(200).json({ status: 'success', body: profileByNameOrServiceOrArea });
    } else {
      // So that front-end searching returns an empty list rather than an error
      res.status(200).json({
        message: `Profile not found. (Search term: ${searchTerm})`,
        body: profileByNameOrServiceOrArea
      });
    }
  } catch (err) {
    next(err);
  }
};

// PUT (no POST since that's register)
// This will update ANY profile (user, helper, admin etc)
const updateProfile = async (req, res, next) => {
  try {
    // console.log('req.currentUser._id', req.currentUser._id);
    const profile = await Profile.findById(req.params.id);
    console.log('profile._id', profile._id);
    console.log({ profile });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    } else if (!req.currentUser._id.equals(profile._id)) {
      return res.status(401).json({
        message:
          'Unauthorised action. You must be the owner of this user profile to update this profile.'
      });
    } else {
      profile.set(req.body);
      const savedProfile = await profile.save();
      return res.status(200).json({ status: 'Successfully updated profile', body: savedProfile });
    }
  } catch (err) {
    next(err);
  }
};

// DEL (everyone can delete their own? or just admin? probably just admin)
const deleteProfile = async (req, res, next) => {
  if (req.currentUser.isAdmin) {
    try {
      // console.log('req.params', req.params);
      const profile = await Profile.findById(req.params.id);
      console.log('profile', profile);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      } else {
        await Profile.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: 'Successfully deleted profile', body: profile });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  } else {
    return res.status(401).send({
      message: 'Unauthorised: you must be an admin to delete a user profile.'
    });
  }
};

export default { getAllProfiles, getProfileById, searchProfile, updateProfile, deleteProfile };
