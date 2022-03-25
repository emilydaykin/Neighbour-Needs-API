import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { emailRegex, passwordRegex } from '../lib/stringTesters.js';
const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'First name required'] },
  surname: { type: String, required: [true, 'Surname required'] },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    validate: (email) => emailRegex.test(email),
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    validate: (password) => passwordRegex.test(password),
  },
  isHelper: { type: Boolean },
  averageRating: { type: String },
  services: { type: Array },
  city: { type: String, required: [true, 'City required'] },
  region: { type: String, required: [true, 'Region required'] },
  imageProfile: { type: String },
  imageService: { type: String },
  comments: [commentSchema],
  posts: { type: Array },
  isAdmin: { type: Boolean },
});

userSchema.plugin(uniqueValidator);

export default mongoose.model('Profile', profileSchema);
