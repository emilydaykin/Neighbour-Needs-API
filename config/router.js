import express from 'express';
import profileController from '../controllers/profileController.js';
import postsController from '../controllers/postsController.js';
// import commentsController from '../controllers/commentsController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

// * FOR ALL USERS AND CREATE PRO
router.route('/profiles').get(profileController.getAllProfiles);

// * location, service, blah blah???
router
  .route('/profiles/:searchTerm')
  .get(profileController.searchProfile)
  .put(profileController.updateProfile)
  .delete(profileController.deleteProfile);

//* FOR POSTS
router
  .route('/posts')
  .get(postsController.getAllPosts)
  .post(postsController.createPost);

// //*POSTS ID
router
  .route('/posts/:id')
  .put(postsController.editPost)
  .delete(postsController.deletePost);

// *FOR EACH PROFILE AND CARD

// router
//   .route('/profile/:id/comments')
//   .get(commentsController.getAllComments)
//   .post(commentsController.createComment);

// router
//   .route('/profile/:id/comments/:id')
//   .put(commentsController.editComment)
//   .delete(commentsController.deleteComment);

router.route('/register').post(userController.registerProfile);

router.route('/login').post(userController.loginProfile);

export default router;
