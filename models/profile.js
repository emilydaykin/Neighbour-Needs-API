import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isHelper: { type: Boolean },
  averageRating: { type: String, required: true },
  service: { type: String },
  city: { type: String, required: true },
  region: { type: String, required: true },
  imageProfile: { type: String },
  imageService: { type: String },
  comments: [commentSchema],
  isAdmin: { type: Boolean },
});

export default mongoose.model('Profile', profileSchema);
