import Profile from '../models/profile.js';

const createComment = async (req, res, next) => {
  try {
    if (!req.currentUser) {
      res
        .status(400)
        .json({ message: 'Unauthorised: User must be logged in.' });
    } else {
      const profile = await Profile.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      } else {
        const newComment = {
          ...req.body,
          createdBy: req.currentUser._id
        };
        console.log('newComment', newComment);
        profile.comments.push(newComment);
        const savedProfile = await profile.save();
        return res
          .status(201)
          .json({ message: 'Comment successfully created', savedProfile });
      }
    }
  } catch (error) {
    next(error);
  }
};

// helper function used in both deleteComment and updateComment
async function checkProfileAndPerformAction(req, res, action) {
  const { id, commentId } = req.params;
  const profile = await Profile.findById(id);
  console.log(profile);
  if (!profile) {
    return res.status(404).send({ message: 'Profile not found' });
  } else {
    const comment = profile.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    } else if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).json({
        message: 'Unauthorised action. You must be the creator of this comment to ${action} it.'
      });
    } else {
      if (action === 'delete') {
        comment.remove();
      } else if (action === 'update') {
        comment.set(req.body);
      } else {
        return 'action needs to be `update` or `delete`.';
      }
      const savedProfile = await profile.save();
      return res
        .status(200)
        .send({ message: `Comment succesfully ${action}d`, body: savedProfile });
    }
  }
}

const deleteComment = async (req, res, next) => {
  try {
    checkProfileAndPerformAction(req, res, 'delete');
  } catch (error) {
    next(error);
  }
};

const editComment = async (req, res, next) => {
  try {
    checkProfileAndPerformAction(req, res, 'update');
  } catch (error) {
    next(error);
  }
};

export default {
  createComment,
  deleteComment,
  editComment,
};
