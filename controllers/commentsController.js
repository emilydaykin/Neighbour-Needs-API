import Profile from '../models/profile.js';

const createComment = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }
    const newComment = {
      ...req.body,
      createdBy: req.currentUser,
    };
    profile.comments.push(newComment);

    const savedProfile = await profile.save();

    return res.status(201).json(savedProfile);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    const profile = await Profile.findById(id);
    console.log(profile);
    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    const comment = profile.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unathorized action' });
    }

    comment.remove();

    const savedProfile = await profile.save();

    return res.status(200).send(savedProfile);
  } catch (error) {
    next(error);
  }
};

const editComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    const comment = profile.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unathorized action' });
    }

    comment.set(req.body);

    const savedProfile = await profile.save();
    return res.status(200).send(savedProfile);
  } catch (error) {
    next(error);
  }
};

export default {
  createComment,
  deleteComment,
  editComment,
};
