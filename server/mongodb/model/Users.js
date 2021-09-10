const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model('users', new Schema({
  id: { type: String },
  email: { type: String },
  password: { type: String }
}, {
  versionKey: false
}));