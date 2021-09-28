import mongoose from "mongoose";
const Schema = mongoose.Schema;
const indexesSchema = new Schema({
  name: {
    type: String,
  },
  currentIndex: {
    type: Number,
  }
});

export default mongoose.model('indexes', indexesSchema);