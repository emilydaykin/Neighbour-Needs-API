import Post from '../models/post.js';
// import Profile from '../models/profile.js';

const createPost = async (req, res, next) => {
  try {
    if (!req.currentUser) {
      res.status(400).json({ message: 'Unauthorised. You must be signed in to create a post.' });
    } else {
      // console.log('req.currentUser', req.currentUser);
      const newPost = await Post.create({
        ...req.body,
        createdById: req.currentUser._id,
        createdByName: req.currentUser.firstName,
        createdBySurname: req.currentUser.surname
      });
      // await Profile.updateMany(
      //   { _id: newPost.service },
      //   { $push: { posts: newPost._id } }
      // );
      const savedPost = await newPost.save();
      return res.status(201).json({ message: 'Post successfully created', savedPost });
    }
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getAllPostsForProfile = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populated('profiles');
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// helper function used in both deletePost and updatePost
async function checkProfileAndPerformAction(req, res, action) {
  const post = await Post.findById(req.params.id);
  // console.log('post', post);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  } else if (!post.createdById.equals(req.currentUser._id)) {
    return res.status(404).json({
      message: `Unauthorised action. You must be the creator of this post to ${action} it.`
    });
  } else {
    if (action === 'delete') {
      await post.remove();
      return res.status(204).json({ message: 'Successfully deleted post' });
    } else if (action === 'update') {
      post.set(req.body);
      const savedPost = await post.save();
      return res.status(200).json({ message: 'Successfully updated post', body: savedPost });
    } else {
      return 'action needs to be `update` or `delete`.';
    }
  }
}

const updatePost = async (req, res, next) => {
  // console.log('req.currentUser.id', req.currentUser._id);
  try {
    checkProfileAndPerformAction(req, res, 'update');
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    checkProfileAndPerformAction(req, res, 'delete');
  } catch (err) {
    next(err);
  }
};

export default {
  createPost,
  getAllPosts,
  getAllPostsForProfile,
  updatePost,
  deletePost
};
