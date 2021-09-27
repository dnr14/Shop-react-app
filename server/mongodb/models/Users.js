import mongoose from "mongoose";
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: {
    type: String,
    required: [true, 'id is required'],
    trim: true,
    unique: true,
    select: true
  },
  email: { type: String, trim: true, select: true },
  password: { type: String, required: [true, 'Password is required!'], select: false }
}, {
  toObject: { virtuals: true }
})

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  } else {
    user.password = bcrypt.hashSync(user.password);
    return next();
  }
})

userSchema.methods.authenticate = function (password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};



export default mongoose.model('users', userSchema);