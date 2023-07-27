import mongoose, {model, Schema} from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  socials: [{ name: String, link: String }],
  image: { type: String, required: true },
  projects: [{ type: mongoose.Types.ObjectId, ref: 'Projects' }],
})


export const UserModel = model('User', UserSchema)