import jwt from 'jsonwebtoken';
import Profile from '../models/profile.js';
import { secret } from '../config/environment.js';

const secureRoute = async (res, req, next) => {
  try {
    console.log('req.headers.authorization', req.headers.authorization);
    const authToken = req.headers.authorization;
    if (!authToken || !authToken.startsWith('Bearer')) {
      return res.status(401).send({ message: 'Unauthorised' });
    } else {
      const token = authToken.replace('Bearer ', '');
      jwt.verify(token, secret, async (err, data) => {
        if (err) {
          return res.status(400).json({ message: 'Unauthorised' });
        } else {
          console.log('data', 'data');
          const user = await Profile.findById(data.userId);
          if (!user) {
            return res.status(401).json({ message: 'Unauthorised' });
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
