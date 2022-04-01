import jwt from 'jsonwebtoken';
import Profile from '../models/profile.js';
import { secret } from '../config/environment.js';

// ! Remove explicit error message at deployement for security.
const secureRoute = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (!authToken || !authToken.startsWith('Bearer')) {
      return res
        .status(401)
        .send({ message: 'Unauthorised. Auth Token incorrect or does not exist' });
    } else {
      const token = authToken.replace('Bearer ', '');
      jwt.verify(token, secret, async (err, data) => {
        if (err) {
          return res.status(400).json({ message: "Unauthorised. JWT can't verify." });
        } else {
          // console.log('data', data);
          const user = await Profile.findById(data.profileId);
          if (!user) {
            return res.status(401).json({ message: 'Unauthorised. User not in database' });
          } else {
            req.currentUser = user;
            next();
          }
        }
      });
    }
  } catch (err) {
    return res.status(401).send({ message: 'Unauthorised' });
  }
};

export default secureRoute;
