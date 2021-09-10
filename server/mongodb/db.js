import mongoose from "mongoose";
import dotenv from 'dotenv';
const a = dotenv.config({ path: "../.env" });

console.log(a);
const DB_PATH = process.env.DB;
const PORT = process.env.PORT;

console.log(` DB_PATH = ${DB_PATH}`);
console.log(` PORT = ${PORT}`);




export default function db() {

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

};

