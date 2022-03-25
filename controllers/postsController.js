import Post from '../models/post.js';
// import Profile from '../models/profile.js';

const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      createdBy: req.currentUser.id,
    });

    // await Profile.updateMany(
    //   { _id: newPost.service },
    //   { $push: { posts: newPost._id } }
    // );

    return res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
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

const editPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await Post.findByIdAndUpdate(req.params.id);
    } else {
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await Post.findByIdAndRemove(req.params.id);
    } else {
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    next(err);
  }
};

export default {
  createPost,
  getAllPosts,
  getAllPostsForProfile,
  editPost,
  deletePost,
};
