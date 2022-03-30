import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    service: { type: String, required: true },
    urgency: { type: String, required: false },
    createdById: {
      type: mongoose.Schema.ObjectId,
      ref: 'Profile',
      required: true
    },
    createdByName: {
      type: String
    },
    createdBySurname: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
