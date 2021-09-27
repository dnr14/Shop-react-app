import mongoose from "mongoose";

const Schema = mongoose.Schema;
const borderSchema = new Schema({
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
    required: [true, "게시글 비밀번호는 필수 입니다."],
    select: true
  },
  createAt: {
    type: String,
    required: [true, "게시글 등록 시간은 필수 입니다."],
    select: true
  },
  title: {
    type: String,
    select: true
  },
  body: {
    type: String,
    select: true
  },
  fileUrl: {
    type: String,
    select: true
  }
});

export default mongoose.model('borders', borderSchema);
