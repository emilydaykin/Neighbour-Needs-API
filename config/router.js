import express from 'express';
import profileController from '../controllers/profileController';
import postController from '../controllers/postController';
import commentsController from '../controllers/commentsController';

const router = express.Router();

// * FOR ALL USERS AND CREATE PRO
router.route('/profiles').get(profileController.getAllProfiles);

// * location, service, blah blah???
router
  .route('/profiles/:id')
  .get(profileController.searchProfile)
  .put(profileController.updateProfile)
  .delete(profileController.deleteProfile);

//* FOR POSTS
router
  .route('/posts')
  .get(postsController.getAllPosts)
  .post(postsController.createPost);

//*POSTS ID
router
  .route('/posts/:id')
  .put(postController.editPost)
  .delete(postComment.deletePost);

// *FOR EACH PROFILE AND CARD

router
  .route('/profile/:id/comments')
  .get(commentsController.getAllComments)
  .post(commentsController.createComment);

router
  .route('/profile/:id/comments/:id')
  .put(commentsController.editComment)
  .delete(commentsController.deleteComment);

router.route('/register').post(userController.registerProfile);

router.route('/login').post(userController.loginProfile);

export default router;
