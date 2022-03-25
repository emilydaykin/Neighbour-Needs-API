import express from 'express';
import profileController from '../controllers/profileController.js';
import postsController from '../controllers/postsController.js';
import commentsController from '../controllers/commentsController.js';
import userController from '../controllers/userController.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();

// * FOR ALL USERS
router.route('/profiles').get(profileController.getAllProfiles);

// * Search by firstName, surname, services, city and region
router.route('/profiles/:searchTerm').get(profileController.searchProfile);

router
  .route('/profiles/:id')
  .put(profileController.updateProfile)
  .delete(profileController.deleteProfile);

//* FOR POSTS
router
  .route('/posts')
  .get(postsController.getAllPosts)
  .post(secureRoute, postsController.createPost);

// //*POSTS ID
router.route('/posts/:id').put(postsController.editPost).delete(postsController.deletePost);

// *FOR EACH PROFILE AND CARD

router.route('/profile/:id/comments').post(secureRoute, commentsController.createComment);

router
  .route('/profile/:id/comments/:commentId')
  .put(secureRoute, commentsController.editComment)
  .delete(secureRoute, commentsController.deleteComment);

router.route('/register').post(userController.registerProfile);

router.route('/login').post(userController.loginProfile);

export default router;
