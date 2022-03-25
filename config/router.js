import express from 'express';
import profileController from '../controllers/profileController.js';
// import postController from '../controllers/postController.js';
// import commentsController from '../controllers/commentsController.js';
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
// router.route('/posts').get(postsController.getAllPosts).post(postsController.createPost);

// //*POSTS ID
// router.route('/posts/:id').put(postController.editPost).delete(postComment.deletePost);

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
