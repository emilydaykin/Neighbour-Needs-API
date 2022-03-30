import express from 'express';
import profileController from '../controllers/profileController.js';
import postsController from '../controllers/postsController.js';
import commentsController from '../controllers/commentsController.js';
import userController from '../controllers/userController.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();

// * FOR ALL USERS
// ADMIN only!
router.route('/users').get(secureRoute, userController.getAllUsers);

// Get all helpers
router.route('/profiles').get(profileController.getAllProfiles);

// * Search by firstName, surname, services, city and region
router.route('/profiles/:searchTerm').get(profileController.searchProfile);

// Get helper by id
router
  .route('/single-profile/:id')
  .get(profileController.getProfileById)
  .put(secureRoute, profileController.updateProfile) // same-user only
  .delete(secureRoute, profileController.deleteProfile); // admin only;

//* FOR POSTS
router
  .route('/posts')
  .get(postsController.getAllPosts)
  .post(secureRoute, postsController.createPost); // logged-in users only

// //*POSTS ID
router
  .route('/posts/:id')
  .put(secureRoute, postsController.updatePost) // same-user only
  .delete(secureRoute, postsController.deletePost); // same-user only

// *FOR EACH PROFILE AND CARD

router.route('/profile/:id/comments').post(secureRoute, commentsController.createComment); // logged-in users only

router
  .route('/profile/:id/comments/:commentId')
  .put(secureRoute, commentsController.updateComment) // same-user only
  .delete(secureRoute, commentsController.deleteComment); // same-user only

router.route('/register').post(userController.registerUser);

router.route('/login').post(userController.loginUser);

export default router;
