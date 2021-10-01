import mongoose from "mongoose";
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;
const boardsSchema = new Schema({
  boardsId: {
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
  gender: {
    type: Number,
    required: [true, "성별은 필수 입니다."],
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
  format: {
    type: String,
    select: true
  }
});

boardsSchema.pre('save', function (next) {
  const boards = this;
  if (!boards.isModified('password')) {
    return next();
  } else {
    boards.password = bcrypt.hashSync(boards.password);
    return next();
  }
})

boardsSchema.methods.authenticate = function (password) {
  const boards = this;
  return bcrypt.compareSync(String(password), boards.password);
};


export default mongoose.model('boards', boardsSchema);
