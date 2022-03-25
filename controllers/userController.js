import Profile from '../models/profile.js';
import jwt from 'jsonwebtoken';
import { secret } from '../config/environment.js';
async function registerProfile(req, res, next) {
  try {
    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(422).json({ message: 'Passwords do not match' });
    }

    const profile = await Profile.create(req.body);
    return res.status(201).json({ message: 'Profile created !!!', body: profile });
  } catch (err) {
    next(err);
  }
}

async function loginProfile(req, res, next) {
  try {
    const profile = await Profile.findOne({ email: req.body.email });

    if (!profile) {
      return res.status(404).json({ message: 'Unauthorized, profile does not exist' });
    }

    const isValidPw = profile.validatePassword(req.body.password);

    if (!isValidPw) {
      return res.status(404).json({ message: 'Unauthorized, passwords do not match' });
    }

    const token = jwt.sign(
      {
        profileId: profile._id,
        isAdmin: profile.isAdmin,
        isHelper: profile.isHelper
      },
      secret,
      { expiresIn: '6h' }
    );

    return res.status(202).send({ token, message: 'Login successful!' });
  } catch (err) {
    next(err);
  }
}

export default {
  registerProfile,
  loginProfile
};
