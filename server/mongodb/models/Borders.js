import mongoose from "mongoose";
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;
const bordersSchema = new Schema({
  borderId: {
    type: Number,
    required: [true, "게시글 번호는 필수 입니다."],
    unique: true,
    select: true
  },
  createId: {
    type: String,
    select: true
  },
  password: {
    type: String,
    required: [true, "게시글 비밀번호는 필수 입니다."],
    select: true
  },
  createAt: {
    type: String,
    required: [true, "게시글 등록 시간은 필수 입니다."],
    select: true
  },
  body: {
    type: String,
    select: true
  },
  originalFileName: {
    type: String,
    select: true
  },
  fileName: {
    type: String,
    select: true
  },
  mimeType: {
    type: String,
    select: true
  }
});

bordersSchema.pre('save', function (next) {
  const border = this;
  if (!border.isModified('password')) {
    return next();
  } else {
    border.password = bcrypt.hashSync(border.password);
    return next();
  }
})

bordersSchema.methods.authenticate = function (password) {
  const border = this;
  return bcrypt.compareSync(password, border.password);
};


export default mongoose.model('borders', bordersSchema);
