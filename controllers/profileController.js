import Profile from '../models/profile.js';

// GET
const getAllProfiles = async (req, res, next) => {
  try {
    const allProfiles = await Profile.find();
    return res.status(200).json({ status: 'success', body: allProfiles });
  } catch (err) {
    next(err);
  }
};

// GET (by id, name, services, city, or region)
const searchProfile = async (req, res, next) => {
  try {
    const allProfiles = await Profile.find();
    const profileById = allProfiles.find((profile) => (profile.id = req.params.searchTerm));

    if (profileById) {
      return res.status(200).json({ status: 'success', body: profileById });
    } else {
      const searchTermLowerCase = req.params.searchTerm.toLowerCase();
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
        res.status(400).json({ message: 'Profile not found' });
      }
    }
  } catch (err) {
    next(err);
  }
};

// PUT (no POST since that's register)
const updateProfile = async (req, res, next) => {
  try {
    const updatedProfile = await Profile.findById(req.params.id);
    updatedProfile.set(req.body);
    const savedProfile = await updateProfile.save();
    return res.status(200).json({ status: 'Successfully updated profile', body: savedProfile });
  } catch (err) {
    next(err);
  }
};

// DEL (everyone can delete their own? or just admin? probably just admin)
const deleteProfile = async (req, res, next) => {
  try {
    const deletedProfile = await Profile.findById(req.params.id);
    await Profile.findByIdAndRemove(req.params.id);
    return res.status(200).json({ message: 'Successfully deleted profile', body: deletedProfile });
  } catch (err) {
    next(err);
  }
};

export default { getAllProfiles, searchProfile, updateProfile, deleteProfile };
