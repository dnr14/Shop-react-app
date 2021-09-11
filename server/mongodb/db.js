import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DB_PATH = process.env.DB;

const db = () => {
  const connect = () => {
    mongoose.connect(DB_PATH, err => {
      if (err) {
        console.error("mongo db connect error", err);
      }
      console.log("mongo db connected");
    });
  }

  connect();
  mongoose.connection.on("disconnected", connect);

}

export default db;

