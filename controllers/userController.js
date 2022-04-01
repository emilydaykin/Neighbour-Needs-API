import Profile from '../models/profile.js';
import jwt from 'jsonwebtoken';
import { secret } from '../config/environment.js';
import { passwordRegex } from '../lib/stringTesters.js';

// = Register profile
async function registerUser(req, res, next) {
  try {
    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(422).json({ message: 'Passwords do not match' });
    } else if (!passwordRegex.test(req.body.password)) {
      return res.status(422).json({ message: 'Passwords does not meet validation requirements' });
    } else {
      const profile = await Profile.create(req.body);
      return res.status(201).json({
        message: 'Welcome!! Profile successfully created!',
        body: profile
      });
    }
  } catch (err) {
    next(err);
  }
}

async function loginUser(req, res, next) {
  try {
    const profile = await Profile.findOne({ email: req.body.email });

    if (!profile) {
      return res.status(404).json({ message: 'Unauthorized. Profile does not exist' });
    } else {
      const isValidPw = profile.validatePassword(req.body.password);
      if (!isValidPw) {
        return res.status(404).json({ message: 'Unauthorized. Wrong password' });
      } else {
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
      }
    }
  } catch (err) {
    next(err);
  }
}

// helpers, non-helpers & admin
async function getAllUsers(req, res, next) {
  if (req.currentUser.isAdmin) {
    try {
      const allUsers = await Profile.find();
      return res.status(200).json({ status: 'success', body: allUsers });
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(401).send({
      message: 'Unauthorised: you must be an admin to get all users'
    });
  }
}

export default {
  registerUser,
  loginUser,
  getAllUsers
};
