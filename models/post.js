import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    category: { type: String, required: true },
    urgency: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'Profile',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
